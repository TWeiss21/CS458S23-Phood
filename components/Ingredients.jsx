/**
 * Intended as the list of ingredents for a specific recipe
 * props provides an array of each ingredient in a specific recipe; props.recipeIngredients
 * 
 * the function returns a list of ingredent components
 */
import Ingredient from './SingleIngredient'
const Ingredients = (props) => {
    return(
        <div className='ingredGrid' id="ingredGrid">
            <div className='ingredientLayout' id='ingredientLayout'>

                {
                    //Maps over the props.recipeIngredients array using the itorator list, each item gets its own Ingredient comp.
                    (props.recipeIngredients || []).map((item, index)=>(
                        //TODO: modify the css to display each ingredient on an individual line
                        <Ingredient key={index} IngredientName = {item}/>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Ingredients