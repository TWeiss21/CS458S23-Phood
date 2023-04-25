import React from 'react'
import RecipeButtons from './RecipeDetailComps/RecipeDetailsButtonsRow'
import RecipeImage from './RecipeDetailComps/RecipeDetailsImage'
import RecipeTitle from './RecipeDetailComps/RecipeDetailsTitle'
import RecipeDescription from './RecipeDetailComps/RecipeDetialsDescription'
import Ingredients from './Ingredients'
import RecipeInstructions from './RecipeDetailComps/RecipeInstructions'
import Nugget from "./TheNugget.jsx"

/**
 * Overview of intended doc layout for Recipe Details
 * <row> Buttons: add to list, edit, delete <row>
 * <row> Title                              <row>
 * <row> Image box ; Description            <row>
 * <row> List of ingredents                 <row>
 * <row> Instructions                       <row>
 * 
 * Each component will be easier to work with than a group of divs, nicely encapsulating the funciton of each comp for visual manipulation.
 * 
 * TODO: test each component.
 * TODO: ReOrg the comopnents such that they do not component GUI overlap.
 * TODO: verify window size modification does not cause component GUI overlap.
 */
const RecipeDetail = (props) =>{

  //test array of ingredents, will remove when props has correct data
  const ingredentsArray = ['aldkfj']
  return(
    <React.Fragment>
      <div className="recipeDetailContainer">
        <RecipeButtons id="recipeButtons"/>
        <div className="recipeDetailLayout">
          <RecipeImage/>
          <RecipeTitle title = {props.RecipeData[0]}/>
          <RecipeDescription description = {props.RecipeData[1]}/>
            <Ingredients recipeIngredients = {ingredentsArray} />
           <div className='stepGrid'>
            <div className="recipeListLine recipeDetailLineSteps" id="recipeDetailLineSteps"></div>
              <div className="step">{props.RecipeData[2]}</div>
            </div> 
            <RecipeInstructions instructions = {props.RecipeData[2]}/>
        </div>
    </div>
    </React.Fragment>
  )
}

export default RecipeDetail