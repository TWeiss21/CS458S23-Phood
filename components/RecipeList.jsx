import React, { Component } from 'react'
import Recipes from '../mocks/Recipes.js'
import AddRecipeModal from './AddRecipeModal'

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
        <div className="container">
            <div className="recipeListHeader" id="recipeListHeader"> &#8205; Recipe Book</div>
            <div className="listContainer"id="listContainer">
                {
                  Recipes.map(list => (
                    <>
                    <div className="outerRecipeContainer"id="outerRecipeContainer">
                      <button key={list.id} className="recipeContainer" id="recipeContainer">
                        <div className="recipeListName" id="recipeListName">{list.recipe_name}</div>
                        <div className="recipeListLine" id="recipeListLine"></div>
                      </button><button className="listPlus" id="listPlus">&#43;</button>
                    </div>
                    </>
                  ))
                }
            </div>
        </div>
        <div className="addRecipeBtnContainer" id="addRecipeBtnContainer">
        <button className="generalBtn addRecipeBtn" id="addRecipeBtn"><AddRecipeModal/></button>
        </div>
        </div>
      )
  
}

export default GetRecipeNames;