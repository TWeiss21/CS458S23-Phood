import React, { Component } from 'react'
import Recipes from '../mocks/Recipes.js'
import AddRecipeModal from './AddRecipeModal'
import Nugget from './TheNugget'

const GetRecipeNames = (props) =>{
//const RecipeList = () =>{

// PASSING TESTS BECAUSE OF THIS using the fallback option for .map()
//https://stackoverflow.com/questions/54257985/type-error-cannot-read-property-map-of-undefined

      //const {Recipes} = this.state;
      // console.log(props.data)
      // console.log("The data in props of recipelist")
      
      return(
        <div className="container">
            <div className="recipeListHeader" id="recipeListHeader"> &#8205; Recipe Book</div>
            <div className="listContainer"id="listContainer">
                {
                  (props.data || []).map(list => ( 
                    <>
                    <Nugget id={list.id} recipeName={list.name} onClick={props.onClick}/>
                    {/* <div key={list.name} className="outerRecipeContainer"id="outerRecipeContainer">
                      <button className="recipeContainer" id="recipeContainer" onClick={props.onClick}>
                        <div className="recipeListName" id="recipeListName">{list.name}</div>
                        <div className="recipeListLine" id="recipeListLine"></div>
                      </button><button className="listPlus" id="listPlus">&#43;</button>
                    </div> */}
                    </>
                  ), props.name)
                }
            </div>
            <div className="addRecipeBtnContainer" id="addRecipeBtnContainer">
              <button className="generalBtn addRecipeBtn" id="addRecipeBtn"><AddRecipeModal/></button>
            </div>
        </div>
      )
}

export default GetRecipeNames;