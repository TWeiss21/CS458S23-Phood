/**
 * RecipeDetailsButtons Row is the component handeling the alignment of the "Add to List", "Edit", "Delete" buttons
 * 
 * 
 * TODO: verify each button is required
 * TODO: if required make each button functional
 */
import React from 'react'


const RecipeButtons = (props) =>{
    // function deleteRecipe(){
    //     let id = props.recipeID
    //     props.deleteRecipe(id)
    // }
return(
<div className="btnHolder">
    {/* TEMP FOR NOW - reduce clutter <button className="generalBtn recipeBtn" id="recipeBtn">Add to List</button> */}
    <div className="rightAlign">
    {/* TEMP FOR NOW - <button className="generalBtn recipeBtn recipeDeleteBtn" id="recipeDeleteBtn" onClick={deleteRecipe}>Delete</button> */}
    {/* TEMP FOR NOW - reduce clutter <button className="generalBtn recipeBtn recipeEditBtn" id="recipeEditBtn">Edit</button> */}
    </div>
</div> 
)
}
export default RecipeButtons