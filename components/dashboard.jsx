/** 
 * Dashboard is the upper most component for this application.
 * It sits just below the index page on the front end.
 * 
 * Purpose: organize the three main functions for the dashboard Details, RecipeBook, and Shopping list
 * 
 * TODO: Remove duplicates of the ingredients list, maybe this state should be managed by index
 * TODO: Click event should also adjust the state of the RecipeDetails for id of recipe.
 */

import React, {useState} from "react";
import Header from "./Header"
import RecipeList from "./RecipeList"
import RecipeDetail from "./RecipeDetail"
import ShoppingList from "./ShoppingList"

const Dashboard = (props) => {

  // console.log("Ingredients in props: " + props.allingredients)
  
  //Componenet state
  const [RecipeDetailsData, setData] = useState("")
  const [uniqueIngredients, setUniqueIngredients] = useState([])
  
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

  /**
   * Filter out all duplicate ingredients
   */
  function filterDuplicateIngredients(){
    let uniqueItems  = []
    const hash = {}
    props.allingredients.filter((item)=>{
      const name = item.name
      //console.log("Current name of filter itorator: " + name)
      if(!hash[name]){
        // console.log(name +  " is UNIQUE, added to hash table")
        hash[name] = true
        uniqueItems.push(item)
        return true
      }
      // console.log(name + " found in the hash, NOT added to the hash table")
      return false
    })

    // console.log("Unique Items: "+ uniqueItems[0].name)
    uniqueItems.forEach(element => console.log(element.name))
    return uniqueItems

  }
  // shows a list of not duplicate entries filterDuplicateIngredients()

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
          listOfIngredients = {props.allingredients}
            />
        </div>

        <div className="shopping"> 
          <ShoppingList 
            listOfIngredients = { props.allingredients }/>
        </div>

      </div>
    </React.Fragment>
  );
}

export default Dashboard;
