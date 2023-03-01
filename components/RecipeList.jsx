import React from 'react'
import recipies from '../mocks/Recipes.json'

//get the names of recipies from the larger mock obj
// recipies.forEach(getNames)
// function getNames(current){
//   console.log(current['recipe_name'])
// }

const RecipeList = () =>{
  return(
    <div>
    <div className="recipeListHeader" id="recipeListHeader"> &#8205; Recipe Book</div>
    <div className="listContainer"id="listContainer">
      <div className="outerRecipeContainer"id="outerRecipeContainer">
        <button className="recipeContainer" id="recipeContainer">
          <div className="recipeListName" id="recipeListName">Chicken Nuggets</div>      
          <div className="recipeListLine" id="recipeListLine"></div>
        </button>
        <button className="listPlus" id="listPlus">&#43;</button>
      </div>
    </div>
    <div className="addRecipeBtnContainer" id="addRecipeBtnContainer">
    <button className="generalBtn addRecipeBtn" id="addRecipeBtn">Add Recipe</button>
    </div>
  </div>
  )
}

export default RecipeList