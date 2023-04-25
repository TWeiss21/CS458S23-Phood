const RecipeInstructions = (props) =>{
    return(
        <div className='stepGrid'>
            <div className="recipeListLine recipeDetailLineSteps" id="recipeDetailLineSteps"></div>
            <div className="step">{props.instructions}</div>
        </div>
    )
}

export default RecipeInstructions