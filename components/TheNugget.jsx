
const Nugget = (props)=>{
    function handleID(){
      let id = props.id
      props.onClick(id)
      
      handleGetIngredientsForRecipe(id)
    }
    /**
     * handle getIngredients for recipe
     */
    const handleGetIngredientsForRecipe = async (id) => {
      let query = 'http://localhost:3000/api/getIngredientsForSpecificRecipe?id=' + id;
      const ingredients = await getIngredFromRec(query);
      //update the shopping list component pass to callback
      props.onGetIngredients(ingredients)
    }


    /*GET ingredients from recipe and POST to SL db*/
    const handleAddSL = async () => {
      //get recipe info from btn
      let id = props.id;
      //Get ingred from recipe
      let query = 'http://localhost:3000/api/getIngredientsForSpecificRecipe?id=' + id;

      const ingredients = await getIngredFromRec(query);
      var count = Object.keys(ingredients).length;
      //Post every ingred to db
      await postIngredToSL(ingredients, count);

    }

    /*GET ingredients from Recipe*/
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

    /*POST ingredients to SL db */
    const postIngredToSL = async (ingreds, total) =>{
      try{
        var query = 'http://localhost:3000/api/postToShoppingList?total=' + total;
        const req = await fetch(query, {
        method: 'POST', 
        body: JSON.stringify(ingreds),
        
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
  </button><button className="listPlus" data-testid="listPlus" id="listPlus" onClick={handleAddSL}>&#43;</button>
</div>
)
}

export default Nugget
