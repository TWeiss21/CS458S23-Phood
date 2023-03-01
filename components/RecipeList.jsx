import React, { Component } from 'react'
import lists from '../mocks/Recipes.js'
import { GetRecipeNames, GetRecipeDescriptions } from './RecipeListContainer'


const RecipeList = () =>{
  return(
    <div>
    <div className="recipeListHeader" id="recipeListHeader"> &#8205; Recipe Book</div>
    <div className="listContainer"id="listContainer">
      <div className="outerRecipeContainer"id="outerRecipeContainer">
        <button className="recipeContainer" id="recipeContainer">
          <div className="recipeListName" id="recipeListName"><GetRecipeNames/></div>      
          <div className="recipeListLine" id="recipeListLine"></div>
          <div className="recipeListName" id="recipeListName"><GetRecipeDescriptions/></div>
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