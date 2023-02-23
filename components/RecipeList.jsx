import React, { Component } from 'react'
import recipies from '../mocks/Recipes.js'
import GetRecipeLists from './RecipeListContainer'

// class App extends Component {
//   // render() {
//   //   return (
//   //     <div className="App">
//   //       <h1 className="header">Local Storage</h1>
//   //       <GetRecipeLists/>
//   //     </div>
//   //   )
//   // }
// }

//get the names of recipies from the larger mock obj
//recipies.forEach(getNames)
// function getNames(current){
//   const [data,setData]=
//   console.log(current['recipe_name'])
// }

// export const Recipes = () => {
//   return (
//     <>
//       <div className="recipe-container">
//         {recipies.getNames((id, name) => {
//           return (
//             <div id={id}>
//               {name.recipe_name}
//             </div>
//           );
//           })}
//       </div>
//     </>
//   );
// };

const RecipeList = () =>{
  return(
    <div>
    <div className="recipeListHeader" id="recipeListHeader"> &#8205; Recipe Book</div>
    <div className="listContainer"id="listContainer">
      <div className="outerRecipeContainer"id="outerRecipeContainer">
        <button className="recipeContainer" id="recipeContainer">
          <div className="recipeListName" id="recipeListName">Chicken Nuggets</div>      
          <div className="recipeListLine" id="recipeListLine"></div>
          <div className="recipeListName" id="recipeListName"><GetRecipeLists/></div>
        </button>
        <button className="listPlus" id="listPlus">&#43;</button>
      </div>
    </div>
    <div className="addRecipeBtnContainer" id="addRecipeBtnContainer">
    <button className="generalBtn addRecipeBtn" id="addRecipeBtn">Add Recipe</button>
    </div>
  </div>
  )
}

export default RecipeList