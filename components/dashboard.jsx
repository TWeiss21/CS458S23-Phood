import React from "react";
import Header from "./Header"
import RecipeList from "./RecipeList"
import RecipeDetail from "./RecipeDetail"
import ShoppingList from "./ShoppingList"

const dashboard = () => {
  return (
    <React.Fragment>
      <div className="layout">
        <div className="header">
          <Header />
        </div>
        <div className="recipeList">
          <RecipeList />
        </div>
        <div className="recipeDetail">
          <RecipeDetail />
        </div>
        <div className="shopping">
          <ShoppingList />
        </div>
      </div>
    </React.Fragment>
  );
}

export default dashboard;
