
const Nugget = (props)=>{
    function handleID(){
      let id = props.id
      props.onClick(id)
    }
  return(
  <div className="outerRecipeContainer"id="outerRecipeContainer">
  <button className="recipeContainer" id="recipeContainer" onClick={handleID}>
    <div className="recipeListName" id="recipeListName">{props.recipeName}</div>
    <div className="recipeListLine" id="recipeListLine"></div>
  </button><button className="listPlus" id="listPlus">&#43;</button>
</div>
)
}

export default Nugget
