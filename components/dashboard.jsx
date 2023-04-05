import React from "react";
import Header from "./Header"
import RecipeList from "./RecipeList"
import RecipeDetail from "./RecipeDetail"
import ShoppingList from "./ShoppingList"

//Parse click event of recipe list item to deliver id from the db then pas into the variable

const dashboard = (props) => {
  let idFromRecipeList = "temp"
  return (
    <React.Fragment>
      <div className="layout">
        <div className="header">
          <Header />
        </div>
        <div className="recipeList">
          <RecipeList data = { props.whatever }/>
        </div>
        <div className="recipeDetail">
          <RecipeDetail data = {props.whatever} id = {idFromRecipeList}/>
        </div>
        <div className="shopping">
          <ShoppingList />
        </div>
      </div>
    </React.Fragment>
  );
}

export default dashboard;
