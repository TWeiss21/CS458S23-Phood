import React, { Component } from 'react'
import Recipes from '../mocks/Recipes.js'
import AddRecipeModal from './AddRecipeModal'

const GetRecipeNames = (props) =>{
//const RecipeList = () =>{

      //const {Recipes} = this.state;
      console.log(props.data)
      console.log("The data in props of recipelist")
      return(
        <div className="container">
            <div className="recipeListHeader" id="recipeListHeader"> &#8205; Recipe Book</div>
            <div className="listContainer"id="listContainer">
                {
                  props.data.map(list => (
                    <>
                    <div className="outerRecipeContainer"id="outerRecipeContainer">
                      <button key={list.id} className="recipeContainer" id="recipeContainer">
                        <div className="recipeListName" id="recipeListName">{list.name}</div>
                        <div className="recipeListLine" id="recipeListLine"></div>
                      </button><button className="listPlus" id="listPlus">&#43;</button>
                    </div>
                    </>
                  ))
                }
            </div>
            <div className="addRecipeBtnContainer" id="addRecipeBtnContainer">
              <button className="generalBtn addRecipeBtn" id="addRecipeBtn"><AddRecipeModal/></button>
            </div>
        </div>
      )
}

export default GetRecipeNames;