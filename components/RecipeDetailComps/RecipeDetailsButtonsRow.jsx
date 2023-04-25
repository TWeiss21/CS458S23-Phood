/**
 * RecipeDetailsButtons Row is the component handeling the alignment of the "Add to List", "Edit", "Delete" buttons
 * 
 * 
 * TODO: verify each button is required
 * TODO: if required make each button functional
 */
import React from 'react'


const RecipeButtons = (props) =>{
return(
<div className="btnHolder">
    <button className="generalBtn recipeBtn" id="recipeBtn">Add to List</button>
    <div className="rightAlign">
    <button className="generalBtn recipeBtn recipeDeleteBtn" id="recipeDeleteBtn">Delete</button>
    <button className="generalBtn recipeBtn recipeEditBtn" id="recipeEditBtn">Edit</button>
    </div>
</div> 
)
}
export default RecipeButtons