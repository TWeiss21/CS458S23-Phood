import React from "react";
import Header from "./Header"
import RecipeList from "./RecipeList"
import RecipeDetail from "./RecipeDetail"
import Pantry from "./Pantry"
import Footer from "./Footer"
import {useState} from "react"

const dashboard = (props) => {
  let arr = [{"id":"1", "city":"Balt"},{"id":"2", "city":"Tokyo" }]
  return (
    <React.Fragment>
      <div className="layout">
        <div className="header">
          <Header />
        </div>
        <div className="recipeList">
          <RecipeList Name = {arr} />
        </div>
        <div className="recipeDetail">
          <RecipeDetail />
        </div>
        <div className="pantry centered">
          <Pantry />
        </div>
      </div>
    </React.Fragment>
  );
}

export default dashboard;
