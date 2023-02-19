import React from 'react'

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
  </div>
  )
}

export default RecipeList