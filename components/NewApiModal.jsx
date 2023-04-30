import React, { Component, useEffect, useState } from 'react'
import { Dialog, Button, Typography, Card, Autocomplete, Select, DialogTitle, DialogContent, autocompleteClasses, Container, onSubmit, onChange, formData} from "@mui/material";



const NewApiModal = (props) =>{

const postRecipe = async (recipe) => {
  const response = await fetch('http://localhost:3000/api/postToRecipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  });
  return response.json();
};


    const [recipes, setRecipes] = useState([]);

    const [initialRenderComplete, setInitialRenderComplete] = React.useState(false);
    // This useEffect will only run once, during the first render
    React.useEffect(() => {
        // Updating a state causes a re-render
        setInitialRenderComplete(true);
    }, []);

    const [show, setShow] = React.useState(false);


    const handleOpen = () => { 
  //The key for the API as well as the host for it
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2c94ed2596msh2be5d7b9ffa20dcp1162dcjsn9f230731f0ae',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
};
//The fetch request using the spoonacular endpoint and sending the returned json data to our useState variables
fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=20', options)
.then(response => {return response.json()})
.then(data => {
    const newRecipes = data.recipes.map(recipe => {
        return {
            title: recipe.title,
            summary: recipe.summary,
            instructions: recipe.instructions,
            ingredients: recipe.extendedIngredients.map(ingredient => ingredient.name),
        }
    });
        
    setRecipes(newRecipes);
})
.catch(err => console.error(err));

setInitialRenderComplete(true);
        setShow(true);
    }
    const handleClose = () => setShow(false);
    // initialRenderComplete will be false on the first render and true on all following renders
    if (!initialRenderComplete) {
        // Returning null will prevent the component from rendering, so the content will simply be missing from

        // the server HTML and also wont render during the first client-side render.
        return null;
    } else {
    return (
            <div>
            <Button className="generalBtn addRecipeBtn moveright" data-testid="openModalNew" onClick={handleOpen}>Quick Add</Button>
                <div>
                <Dialog open={show} fullWidth={true} maxWidth={"md"}>
                        <DialogTitle className="headerNAM">
                            <Card className="titleNAM" data-testid="title">Add Premade Recipe</Card>
                            <Button className="generalBtnBlue BtnNAM" onClick={handleClose} data-testid="closebtn">Close</Button>
                        </DialogTitle>
                        <DialogContent className="formContainerNAM">
                            {/*Loop recipes in the Dialog Content below*/}
                            <DialogContent>
                            {recipes.map(recipe => (
                            <div className="outerRecipeContainerNAM" key={recipe.title}>
                                {/*the individual recipe container*/}
                                <div className="recipeContainerNAM">
                                    <div className="recipeListNameNAM">{recipe.title}</div>
                                    <div className = "recipeListLineNAM"></div>
                                    <div className = "descNAM">{recipe.summary}</div>
                                    <div className = "smDivLineNAM"></div>
                                    <div className="ingredNAM">{recipe.ingredients.join(", ")}</div>
                                    <div className = "smDivLineNAM"></div>
                                    <div className="stepsNAM">{recipe.instructions}</div>
                                </div>
                                <button className="listPlusNAM" onClick={() => postRecipe(recipe)}>&#43;</button>
                            </div>
                        ))}
                            </DialogContent>
                        </DialogContent>
                </Dialog>
                </div>
            </div>
    ); 
    
    }
   
};
export default NewApiModal;