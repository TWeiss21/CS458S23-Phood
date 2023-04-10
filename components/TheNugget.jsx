
const Nugget = (props)=>{
  return(
  <div className="outerRecipeContainer"id="outerRecipeContainer">
  <button className="recipeContainer" id="recipeContainer" onClick={props.onClick}>
    <div className="recipeListName" id="recipeListName"></div>
    <div className="recipeListLine" id="recipeListLine"></div>
  </button><button className="listPlus" id="listPlus">&#43;</button>
</div>
)
}

export default Nugget
