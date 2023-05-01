/**
 * Single Ingredient is a component for rendering a single ingredient
 * 
 * To be used in the Shopping list component and the Ingredients section of the Recipe Details.
*/
const SingleIngredient = (props) =>{
    return(
        <div>
            <div>{props.IName}</div>
        </div>
    )
}

export default SingleIngredient