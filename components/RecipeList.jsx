import React from 'react'
import { WarnMode } from './WarningModal'
import recipies from '../mocks/Recipes.json'

// for (let i=0; i< recipies.length; i++){
//   console.log(recipies[i])
// }

//get the names of recipies
recipies.forEach(getNames)
function getNames(current){
  console.log(current['recipe_name'])
}

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
   <WarnMode name='Delete' message='Are you sure you would like to delete this item? We will not be able to retrieve it.'/>
  </div>
  )
}

export default RecipeList