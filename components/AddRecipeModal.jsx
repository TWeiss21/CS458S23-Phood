import React, { useEffect, useState } from 'react'
import { Dialog, Button, Typography, Card, Autocomplete, Select, DialogTitle, DialogContent, autocompleteClasses, Container } from "@mui/material";
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import Grid from "@mui/material/Grid"
import dynamic from 'next/dynamic';

function handleSubmit() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            first: event.target.first.value,
            last: event.target.last.value,
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert('Is this your full name: ${result.data}')
    }
}
const AddRecipeModal = () =>{

    const [show, setShow] = React.useState(false);
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
    const [multiline, setMultiline] = useState('');
    const [multiline2, setMultiline2] = useState('');

    const plchldr = [
        { label: 'Cow Pie', id: 1},
        { label: 'Snot Stew', id: 2},
        { label: 'Moist Cereal', id: 3},
        { label: 'I am out of ideas', id: 4},
        { label: 'Why are you still searching', id: 5}
    ];

    const measure = [
        { label: 'teaspoon', id: 1},
        { label: 'tablespoon', id: 2},
        { label: 'cup', id: 3},
        { label: 'quart', id: 4},
        { label: 'who uses gallons to measure?!?!', id: 5}
    ]
    
    return (
            <div>
            <Button data-testid="openModal" onClick={handleOpen}>Add Recipe</Button>
            <form action="/mocks/Recipes.js" method="post">
                <div>
             <Dialog open={show}>
                <DialogTitle sx={{my: 0, py: 0, backgroundColor: '#FD9E02' , display: 'flex', justifyContent: 'flex-end'}}>
                    <Card sx={{my: 0.3, mr: 3, px: 5, backgroundColor: '#126782', color: '#8ECAE6'}} data-testid="title">Add Recipe</Card>
                    <Card sx={{my: 1, mr: 2, pb: 0, px: 0.5, backgroundColor: '#023047'}}><Button sx={{fontSize: 10, backgroundColor: '#126782', color: '#8ECAE6'}} data-testid="savebtn" onClick={handleSubmit}>SAVE</Button></Card>
                    <Card sx={{my: 1, mr: 0, pb: 0.3, px: 0.5, backgroundColor: '#023047'}}><Button onClick={handleClose} sx={{fontSize: 10, backgroundColor: '#126782', color: '#8ECAE6'}} data-testid="closebtn">Close</Button></Card>
                </DialogTitle>
             
             <DialogContent sx={{backgroundColor: '#fbd2a4'}}>
                    <Grid sx={{pt: 2, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
                        <Button sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 150, height: 150}} data-testid="uploadimg">upload image</Button>
                        <DialogContent sx={{py: 0}}>
                            <TextField sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', marginBottom: 2, maxWidth: 200}} data-testid="nameentr" label="Enter Name"></TextField>
                            <TextField sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', maxWidth: 200}} multiline value={multiline} onChange={e => setMultiline(e.target.value)} data-testid="descr" label="Description"></TextField>
                        </DialogContent>
                    </Grid>
                <DialogContent sx={{display: 'flex', justifyContent: 'flex-start', pl: 0}}>
                    <Autocomplete  sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 0.5, mr: 2, height: 55}} options={plchldr} renderInput={(params) => <TextField {...params} label="Ingredient" />} data-testid="ingr"></Autocomplete>
                    <Select  sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 0.2, mr: 2, height: 55}} label="#"><MenuItem>you cant see me!</MenuItem></Select>
                    <Autocomplete  sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 0.25, mr: 2, height: 55}} options={measure} renderInput={(params) => <TextField {...params} label="Measure" />} data-testid="msr" ></Autocomplete>
                    <Card sx={{my: 1, width: 85, px: 0.4, py: 0.5, backgroundColor: '#023047'}}><Button sx={{backgroundColor: '#126782', color: '#8ECAE6', fontSize: 14}} data-testid="add">Add</Button></Card>
                </DialogContent>
                    <Typography sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold'}} data-testid="display" >Ingredients displayed here:</Typography>
                    <TextField sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 1, marginTop: 3}} data-testid="steps" multiline value={multiline2} onChange={e => setMultiline2(e.target.value)}>Steps...</TextField>
                </DialogContent> 
            </Dialog>
            </div>
            </form>
            </div>
    );
    
};
export default AddRecipeModal;