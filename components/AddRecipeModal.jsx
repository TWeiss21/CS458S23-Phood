/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { Dialog, Button, Typography, Card, Autocomplete, Select, DialogTitle, DialogContent, autocompleteClasses, Container, onSubmit} from "@mui/material";
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import Grid from "@mui/material/Grid"
import dynamic from 'next/dynamic';

// function handleSubmit() {
//     //const [count, setCount] = useState(0);

//     //event.preventDefault();

//     const data = new FormData(document.getElementById('sample-form'));

//     const value = data.get("nameentr");

//     const form = document.querySelector('sample-form');
//     if (value){
//         value.addEventListener('SAVE', handleSubmit);
//         console.log({ value });
//     }

    

// }

const AddRecipeModal = () =>{

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
            e.preventDefault();
            const res = await fetch('/api/postToDb', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            console.log(data);
    };

    const [initialRenderComplete, setInitialRenderComplete] = React.useState(false);
    // This useEffect will only run once, during the first render
    React.useEffect(() => {
        // Updating a state causes a re-render
        setInitialRenderComplete(true);
    }, []);

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

        // initialRenderComplete will be false on the first render and true on all following renders
        if (!initialRenderComplete) {
            // Returning null will prevent the component from rendering, so the content will simply be missing from

            // the server HTML and also wont render during the first client-side render.
            return null;
        } else {
    
    return (
            <div>
            <Button data-testid="openModal" onClick={handleOpen}>Add Recipe</Button>
                <div>
             <Dialog open={show}>
             <form onSubmit={handleSubmit}>
                <DialogTitle sx={{my: 0, py: 0, backgroundColor: '#FD9E02' , display: 'flex', justifyContent: 'flex-end'}}>
                    <Card sx={{my: 0.3, mr: 3, px: 5, backgroundColor: '#126782', color: '#8ECAE6'}} data-testid="title">Add Recipe</Card>
                    <Card sx={{my: 1, mr: 2, pb: 0, px: 0.5, backgroundColor: '#023047'}}>
                        <Button sx={{fontSize: 10, backgroundColor: '#126782', color: '#8ECAE6'}} data-testid="savebtn" type="submit" onClick={onSubmit}>SAVE</Button>
                        </Card>
                    <Card sx={{my: 1, mr: 0, pb: 0.3, px: 0.5, backgroundColor: '#023047'}}>
                        <Button onClick={handleClose} sx={{fontSize: 10, backgroundColor: '#126782', color: '#8ECAE6'}} data-testid="closebtn">Close</Button>
                        </Card>
                </DialogTitle>
             
             <DialogContent sx={{backgroundColor: '#fbd2a4'}}>
                    <Grid sx={{pt: 2, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
                        <Button sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 150, height: 150}} data-testid="uploadimg">upload image</Button>
                        <DialogContent sx={{py: 0}}>
                            <TextField sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', marginBottom: 2, maxWidth: 200}} data-testid="nameentr" label="Name" name="name" value={formData.name || ''} onChange={handleChange}></TextField>
                            <TextField sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', maxWidth: 200}} multiline value={multiline} onInput={(e => setMultiline(e.target.value))} data-testid="descr" label="Description" name="description" onChange={handleChange}></TextField>
                        </DialogContent>
                    </Grid>
                <DialogContent sx={{display: 'flex', justifyContent: 'flex-start', pl: 0}}>
                    <Autocomplete  sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 0.5, mr: 2, height: 55}} options={plchldr} renderInput={(params) => <TextField {...params} label="Ingredient" name="ingredient" value={formData.ingredient || ''} onChange={handleChange}/>} data-testid="ingr"></Autocomplete>
                    <Select  sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 0.2, mr: 2, height: 55}} label="#"><MenuItem>you cant see me!</MenuItem></Select>
                    <Autocomplete  sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 0.25, mr: 2, height: 55}} options={measure} renderInput={(params) => <TextField {...params} label="Measure" name="measure" value={formData.measure || ''} onChange={handleChange}/>} data-testid="msr"></Autocomplete>
                    <Card sx={{my: 1, width: 85, px: 0.4, py: 0.5, backgroundColor: '#023047'}}><Button sx={{backgroundColor: '#126782', color: '#8ECAE6', fontSize: 14}} data-testid="add">Add</Button></Card>
                </DialogContent>
                    <Typography sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold'}} data-testid="display" >Ingredients displayed here:</Typography>
                    <TextField sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 1, marginTop: 3}} data-testid="steps" label="Steps" name="steps" value={formData.steps || ''} onChange={handleChange}multiline values={multiline2} onInput={e => setMultiline2(e.target.values)}>Steps...</TextField>
                </DialogContent>
                </form>
            </Dialog>
            </div>
            </div>
    );
    }  
};
export default AddRecipeModal;