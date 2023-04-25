const RecipeTitle = (props) =>{
    return(
        <h1 className='nameGrid' id="nameGrid">{props.title}
            <div className="recipeListLine recipeDetailLineHeader" id="recipeDetailLineHeader"></div>
        </h1>
    )
}
export default RecipeTitle