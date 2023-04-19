
const Nugget = (props)=>{
    function handleID(){
      let id = props.id
      props.onClick(id)
    }

    const handleAddSL = async () => {
      //get recipe info from btn
      let id = props.id;
      //Get ingred from recipe
      let query = 'http://localhost:3000/api/getIngredientsForSpecificRecipe?id=' + id;

      const ingredients = await getIngredFromRec(query);
      //console.log(ingredients) 
      var count = Object.keys(ingredients).length;
      //console.log(count);
      //Post every ingred to db
      await postIngredToSL(ingredients, count);
    }

    const getIngredFromRec = async (query) =>{
      try{
          const res = await fetch(query,{method: 'GET'})
          const results = await res.json()
          return results;
        } catch (err) {
            console.error(err);
            console.log("Error getting recipe ingredients");
        }
    }

    const postIngredToSL = async (ingreds, total) =>{
      try{
        var query = 'http://localhost:3000/api/postToShoppingList?total=' + total;
        const req = await fetch(query, {
        method: 'POST', 
        body: JSON.stringify(ingreds), //stringify if not using test
        
        })
      }catch (err) {
            console.error(err);
            console.log("Error getting recipe ingredients");
      }
    }

  return(
  <div className="outerRecipeContainer"id="outerRecipeContainer">
  <button className="recipeContainer" id="recipeContainer" onClick={handleID}>
    <div className="recipeListName" id="recipeListName">{props.recipeName}</div>
    <div className="recipeListLine" id="recipeListLine"></div>
  </button><button className="listPlus" id="listPlus" onClick={handleAddSL}>&#43;</button>
</div>
)
}

export default Nugget
