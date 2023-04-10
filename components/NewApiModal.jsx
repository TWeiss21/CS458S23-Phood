/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import {Button, Dialog, Card, DialogTitle, DialogContent, Container, onSubmit, onChange, formData} from "@mui/material";

const NewApiModal = (props) =>{

    const [initialRenderComplete, setInitialRenderComplete] = React.useState(false);
    // This useEffect will only run once, during the first render
    React.useEffect(() => {
        // Updating a state causes a re-render
        setInitialRenderComplete(true);
    }, []);


    const [show, setShow] = React.useState(false);
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    // initialRenderComplete will be false on the first render and true on all following renders
    if (!initialRenderComplete) {
        // Returning null will prevent the component from rendering, so the content will simply be missing from

        // the server HTML and also wont render during the first client-side render.
        return null;
    } else {
    return (
            <div>
            <Button data-testid="openModal" onClick={handleOpen}>Add Premade Recipe</Button>
                <div>
                <Dialog open={show}>
                    <div className="container">
                        <div className="recipeListHeader" id="recipeListHeader"> &#8205; Recipe Book</div>
                        <div className="listContainer"id="listContainer">
                            {
                            (props.data || []).map(list => (
                                <>
                                <div className="outerRecipeContainer"id="outerRecipeContainer">
                                <button key={list.id} className="recipeContainer" id="recipeContainer">
                                    <div className="recipeListName" id="recipeListName">{list.name}</div>
                                    <div className="recipeListLine" id="recipeListLine"></div>
                                </button><button className="listPlus" id="listPlus">&#43;</button>
                                </div>
                                </>
                            ))
                            }
                        </div>
                    </div>
                </Dialog>
                </div>
            </div>
    ); 
    }
};
export default NewApiModal;