
const Nugget = (props)=>{
    function handleID(){
      let id = props.id
      props.onClick(id)
    }

    const handleAddSL = async () => {
      //get recipe info from btn
      let id = props.id;
      let ingredients;
      //Get ingred from recipe
      let query = 'http://localhost:3000/api/getIngredientsForSpecificRecipe?id=' + id;

      try{
        const res = await fetch(query,{method: 'POST'})
        ingredients = await res.json()
      } catch (err) {
          console.error(err);
          console.log("This is an error");
      }
      console.log(ingredients)  
      //Post every ingred to db
       //Serialize the form data as JSON
       /*var item = JSON.stringify([{id, name, qty, measurement}]);
       console.log(item);

        try{
            const req = await fetch('http://localhost:3000/api/postToShoppingList', {
            method: 'POST', 
            body: item
        })
        if (req.ok) {
          setMessage("");
        } else {
            setMessage("Cannot add. Recipe.");
        }
        } catch (err) {
            console.error(err);
            console.log("This is an error");
            setMessage("Cannot add.");
        }  */
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
