import React, { Component } from 'react'
import Recipes from '../mocks/Recipes.js'
import AddRecipeModal from './AddRecipeModal'

export class GetRecipeNames extends Component {
  constructor(props){
    super(props);
    this.state = {
      Recipes :Recipes
    };
  }
//const RecipeList = () =>{
  render() {
      const {Recipes} = this.state;
      return(
        <div>
            <div className="recipeListHeader" id="recipeListHeader"> &#8205; Recipe Book</div>
            <div className="listContainer"id="listContainer">
            <div className="outerRecipeContainer"id="outerRecipeContainer">
            {
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
        <button className="generalBtn addRecipeBtn" id="addRecipeBtn"><AddRecipeModal/></button>
        </div>
        </div>
      )
  }
}

export default GetRecipeNames;