/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component, useEffect, useState } from 'react'
import { Dialog, Button, Typography, Card, Autocomplete, Select, DialogTitle, DialogContent, autocompleteClasses, Container, onSubmit, onChange, formData} from "@mui/material";
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"

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
                    <DialogContent className="container">
                        <DialogTitle className="headerAM">
                            <Card data-testid="title">Add Premade Recipe</Card>
                            <Button className="generalBtnBlue BtnAM" onClick={handleClose} data-testid="closebtn">Close</Button>
                        </DialogTitle>
                        <DialogContent className="formContainerAM">
                            <DialogContent>
                                <Button>
                                    <Card >Food</Card>
                                    <Card>line</Card>
                                </Button>
                                <Button className="listPlus" id="listPlus">&#43;</Button>
                            </DialogContent>
                        </DialogContent>
                    </DialogContent> 
                </Dialog>
                </div>
            </div>
    ); 
    }
};
export default NewApiModal;