 /** 
 * RecipeInstructions component for aligning and encapsulating the instructions of a recipe
 * 
 * props.instructions provides access to the instructions passed to the component.
 * Use instructions = {'the instructions'} when passing the instructions into the component
 * 
 * TODO: Align the instructions such that no overlap occurs
 * TODO: Align the instructions for mobile such that no overlap occurs
*/
const RecipeInstructions = (props) =>{
    return(
        <div className='stepGrid'>
            <div className="recipeListLine recipeDetailLineSteps" id="recipeDetailLineSteps"></div>
            <div className="step">{props.instructions}</div>
        </div>
    )
}

export default RecipeInstructions