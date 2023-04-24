import React, {useState} from "react";
import Header from "./Header"
import RecipeList from "./RecipeList"
import RecipeDetail from "./RecipeDetail"
import ShoppingList from "./ShoppingList"

//Parse click event of recipe list item to deliver id from the db then pas into the variable

const Dashboard = (props) => {
  
  //Componenet state
  const [RecipeDetailsData, setData] = useState("RecipeDetails should be blank until something is clicked")
  //Functions
  function handleClick(id){
    //TODO lock down array
    let RecipesDataArr = []
    RecipesDataArr.push(props.allRecipes[id-1].name)
    RecipesDataArr.push(props.allRecipes[id-1].description)
    RecipesDataArr.push(props.allRecipes[id-1].steps)
    setData(RecipesDataArr)
    // console.log(props.allRecipes[id].name)
  }

  let idFromRecipeList = "temp"
  return (
    <React.Fragment>
      <div className="layout">
        <div className="header">
          <Header />
        </div>
        <div className="recipeList">
          <RecipeList key={"item"} data = { props.allRecipes } onClick={handleClick}/>
        </div>
        <div className="recipeDetail">
          <RecipeDetail data = {props.allRecipes} id = {idFromRecipeList} RecipeData={RecipeDetailsData}/>
        </div>
        <div className="shopping">
          
          <ShoppingList listOfIngredients = { props.allingredients }/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
