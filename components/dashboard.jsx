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
  const [RecipeDetailIngredients, setIngredients] = useState([])

  /**
   * Filter out all duplicate ingredients O(n)(linear) using hash table, but all ingredients is an array.
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

  //FUNCTIONS
  /** 
   * handleDetailsClick takes the id of the clicked recipe from the recipe list.
   * It uses that id to find the correct recipe info to display in the Recipe details pane
   * 
   * Intended to pass this function down through props to the clicked component TheNugget
   * this way it activates on the nugget but we only have to fetch data and manage state from the dashboard
  */
  function handleDetailsClick(id){
    let RecipesDataArr = []
    // console.log("recipe ID: "+ (id - 1))
    RecipesDataArr.push(props.allRecipes[id-1].name)
    RecipesDataArr.push(props.allRecipes[id-1].description)
    RecipesDataArr.push(props.allRecipes[id-1].steps)
    RecipesDataArr.push(props.allRecipes[id-1].id) 
    setData(RecipesDataArr)
    // console.log(props.allRecipes[id].name)
  }

  /** 
   * handleGetIngredients takes an array of ingredents and passes it to the state variable RecipeDetailIngredients
   * Intendet to passed eventually into the nugget. 
   * Since the fetch for the joined data recipe <-> recipe-ingredient <-> ingredients is already defined in the nugget
   * 
   * considering pulling the fetch up into the dashboard to simplify code, but it is not part of the RecipeDetail Story
  */
  function handleGetIngredients(ingredients){
    // console.log(ingredients)
    setIngredients(ingredients)
  }
  //EO FUNCTIONS

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
            onClick={handleDetailsClick}
            onGetIngredients={handleGetIngredients}
            
            />
        </div>

        <div className="recipeDetail">
          <RecipeDetail 
            // data = {props.allRecipes} 
            id = {idFromRecipeList} 
            RecipeData={RecipeDetailsData} 
            listOfIngredients = {RecipeDetailIngredients}
            />
        </div>

        <div className="shopping"> 
          <ShoppingList 
            listOfIngredients = { props.shoppingList }/>
        </div>

      </div>
    </React.Fragment>
  );
}

export default Dashboard;
