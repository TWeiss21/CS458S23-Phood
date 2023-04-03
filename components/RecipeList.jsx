import React, { Component } from 'react'
import Recipes from '../mocks/Recipes.js'

const GetRecipeNames = (props) => {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     Recipes :Recipes
  //   };
  // }
  
//const RecipeList = () =>{
  
      //const {Recipes} = this.state;
      return(
        <div>
          {/* here useing the data passed into this component from dashboard */}
          <div>NAME GET DATA { props.Name }</div>
            <div className="recipeListHeader" id="recipeListHeader"> &#8205; Recipe Book</div>
            <div className="listContainer"id="listContainer">
            <div className="outerRecipeContainer"id="outerRecipeContainer">
             
            {
              // This is the block for addind data to the Recipe list, blockout on the left
              Recipes.map(list => (
                <><button key={list.id} className="recipeContainer" id="recipeContainer">
                  <div className="recipeListName" id="recipeListName">{list.recipe_name}</div>
                  <div className="recipeListLine" id="recipeListLine"></div>
                </button><button className="listPlus" id="listPlus">&#43;</button></>
            ))
            }
            
            </div>
        </div>
        <div className="addRecipeBtnContainer" id="addRecipeBtnContainer">
        <button className="generalBtn addRecipeBtn" id="addRecipeBtn">Add Recipe</button>
        </div>
        </div>
      )
  
}

export default GetRecipeNames;