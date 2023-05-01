import React, { Component } from 'react'
import Recipes from '../mocks/Recipes.js'
import AddRecipeModal from './AddRecipeModal'
import Nugget from './TheNugget'
import NewApiModal from './NewApiModal'


const RecipeList = (props) =>{
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
                  //loops through each recipe that is in the db
                  (props.data || []).map(list => (
                    
                    <Nugget 
                      key={list.name} 
                      id={list.id} 
                      recipeName={list.name} 
                      onClick={props.onClick}
                      onGetIngredients={props.onGetIngredients}
                      
                    />
                    
                  ), props.name)
                }
            </div>
            <div className="addRecipeBtnContainer" id="addRecipeBtnContainer">
              <AddRecipeModal/>
              <NewApiModal/>
            </div>
        </div>
      )
}

export default RecipeList;