/** 
 * Dashboard is the upper most component for this application.
 * It sits just below the index page on the front end.
 * 
 * Purpose: organize the three main functions for the dashboard Details, RecipeBook, and Shopping list
 * 
 * TODO: Remove duplicates of the ingredients list, maybe this state should be managed by index
 * TODO: Click event should also adjust the state of the RecipeDetails for id of recipe.
 */

import React, {useState, useEffect} from "react";
import Header from "./Header"
import RecipeList from "./RecipeList"
import RecipeDetail from "./RecipeDetail"
import ShoppingList from "./ShoppingList"

const Dashboard = (props) => {

  // console.log("Ingredients in props: " + props.allingredients)
  
  //Componenet state
  const [RecipeDetailsData, setData] = useState("")
  const [uniqueIngredients, setUniqueIngredients] = useState([])

  /**
   * Filter out all duplicate ingredients, currently O(n)^2, not using a hash table.
   */
  useEffect(()=>{
    function filterDuplicateIngredients(){
      let uniqueItems  = []
      const map = new Map()
      props.allingredients.filter((item)=>{
        const name = item.name
        // if the map does not have the name of the next item in it already
          if(!map.has(name)){
          //put the name in the map
          map.set(name, true)
          uniqueItems.push(item)
          return true
        }
        // the case that the item is not already in the map
        // console.log(name + " found in the hash, NOT added to the hash table")
        return false
      })
  
      setUniqueIngredients(uniqueItems)
  
    }
    filterDuplicateIngredients()
  },[props.allingredients, setUniqueIngredients])

  let allCount = 0
  props.allingredients.forEach(element => {
    allCount++
  });
  //Testing array length for ingredinets.
  // console.log(allCount + ' Total Ings.')
  // console.log(uniqueIngredients.length+' unique ingredients.')
  
  //Functions
  function handleClick(id){
    //TODO lock down array
    let RecipesDataArr = []
    RecipesDataArr.push(props.allRecipes[id-1].name)
    RecipesDataArr.push(props.allRecipes[id-1].description)
    RecipesDataArr.push(props.allRecipes[id-1].steps)
    setData(RecipesDataArr)
    // console.log(props.allRecipes[id].name)
  }
  //EO Functions

  let idFromRecipeList = "temp"
  return (
    <React.Fragment>
      <div className="layout">
        <div className="header">
          <Header/>
        </div>

        <div className="recipeList">
          <RecipeList 
            key={"item"} 
            data = { props.allRecipes } 
            onClick={handleClick}/>
        </div>

        <div className="recipeDetail">
          <RecipeDetail 
            // data = {props.allRecipes} 
            id = {idFromRecipeList} 
            RecipeData={RecipeDetailsData} 
          listOfIngredients = {uniqueIngredients}
            />
        </div>

        <div className="shopping"> 
          <ShoppingList 
            listOfIngredients = { uniqueIngredients }/>
        </div>

      </div>
    </React.Fragment>
  );
}

export default Dashboard;
