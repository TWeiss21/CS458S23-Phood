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
  function handleClick(){
    setData('updated data')
    console.log(props.allRecipes)
  }

  let idFromRecipeList = "temp"
  return (
    <React.Fragment>
      <div className="layout">
        <div className="header">
          <Header />
        </div>
        <div className="recipeList">
          <RecipeList data = { props.allRecipes } onClick={handleClick}/>
        </div>
        <div className="recipeDetail">
          <RecipeDetail data = {props.allRecipes} id = {idFromRecipeList} RecipeData={RecipeDetailsData}/>
        </div>
        <div className="shopping">
          <ShoppingList />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
