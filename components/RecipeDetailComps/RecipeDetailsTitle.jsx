/** 
 * RecipeDetailsTitle component for aligning and encapsulating the title of a recipe
 * 
 * props.title provides access to the Title passed to the component.
 * Use title = {'the title'} when passing the title into the component
 * 
 * TODO: Align the title such that no overlap occurs
 * TODO: Align the title for mobile such that no overlap occurs
*/
const RecipeTitle = (props) =>{
    return(
        <h1 className='nameGrid' id="nameGrid">{props.title}
            <div className="recipeListLine recipeDetailLineHeader" id="recipeDetailLineHeader"></div>
        </h1>
    )
}
export default RecipeTitle