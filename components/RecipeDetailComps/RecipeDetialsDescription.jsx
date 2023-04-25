 /** 
 * RecipeDetailsDescription component for aligning and encapsulating the description of a recipe
 * 
 * props.description provides access to the description passed to the component.
 * Use description = {'the description'} when passing the description into the component
 * 
 * TODO: Align the description such that no overlap occurs
 * TODO: Align the description for mobile such that no overlap occurs
*/
const RecipeDescription = (props) =>{
    return(
        <div className='descGrid' id='descGrid'>{props.description}</div>
    )
}

export default RecipeDescription