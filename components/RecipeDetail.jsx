import React from 'react'
import RecipeButtons from './RecipeDetailComps/RecipeDetailsButtonsRow'
import RecipeImage from './RecipeDetailComps/RecipeDetailsImage'
import RecipeTitle from './RecipeDetailComps/RecipeDetailsTitle'
import RecipeDescription from './RecipeDetailComps/RecipeDetialsDescription'
import Ingredients from './Ingredients'
import RecipeInstructions from './RecipeDetailComps/RecipeInstructions'
import Nugget from "./TheNugget.jsx"

/**
 * Overview of intended doc layout
 * <row> Buttons: add to list, edit, delete <row>
 * <row> Title                              <row>
 * <row> Image box ; Description            <row>
 * <row> List of ingredents                 <row>
 * <row> Instructions                       <row>
 * 
 */
const RecipeDetail = (props) =>{

  //test array of ingredents, will remove when props has correct data
  const ingredentsArray = ['ingredinet 1', 'ingredient 2', 'ingredient 3', 'ingredient 4']
  return(
    <React.Fragment>
      <div className="recipeDetailContainer">
        <RecipeButtons/>
        <div className="recipeDetailLayout">
          <RecipeImage/>
          <RecipeTitle title = {props.RecipeData[0]}/>
          <RecipeDescription description = {props.RecipeData[1]}/>
            {/* <div className='ingredGrid' id="ingredGrid">
              <div className='ingredientLayout' id='ingredientLayout'>
                <div className="ingredsec sec1" id='sec1'><div>sec1 full text aaa</div><div>sec1 full text aaa</div><div>sec1 full text aaa</div><div>sec1 full text aaa</div><div>sec1 full text aaa</div></div>
                <div className="ingredsec sec2" id='sec2'><div>sec2 full text aaa</div><div>sec2</div><div>sec2</div><div>sec2</div><div>sec2</div></div>
                <div className="ingredsec sec3" id='sec3'><div>sec3</div><div>sec3</div><div>sec3</div><div>sec3</div></div>
              </div>
            </div> */}
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