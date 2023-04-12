/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component, useEffect, useState } from 'react'
import { Dialog, Button, Typography, Card, Autocomplete, Select, DialogTitle, DialogContent, autocompleteClasses, Container, onSubmit, onChange, formData} from "@mui/material";

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
                                {/*the individual recipe container*/}
                                <div className="outerRecipeContainerNAM">
                                    <div className="recipeContainerNAM">
                                        <div className="recipeListNameNAM">Food</div>
                                        <div className = "recipeListLineNAM"></div>
                                        <div className = "descNAM">Default</div>
                                        <div className = "smDivLineNAM"></div>
                                        <div className="ingredNAM">ingred</div>
                                        <div className = "smDivLineNAM"></div>
                                        <div className="stepsNAM">steps</div>
                                    </div>
                                    <button className="listPlusNAM">&#43;</button>
                                </div>
                            </DialogContent>
                        </DialogContent>
                </Dialog>
                </div>
            </div>
    ); 
    }
};
export default NewApiModal;