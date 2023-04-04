/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { Dialog, Button, Typography, Card, Autocomplete, Select, DialogTitle, DialogContent, autocompleteClasses, Container, onSubmit, onChange, formData} from "@mui/material";
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-fetch'
const pantry = require('../mocks/pantryData.json')
const sqlite3 = require('sqlite3').verbose();

//const bodyParser = require("body-parser");

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

var pantryItems = []
pantry.forEach(i => pantryItems.push(i.name))

function AddRecipeModal(){

    const [initialRenderComplete, setInitialRenderComplete] = React.useState(false);
    // This useEffect will only run once, during the first render
    React.useEffect(() => {
        // Updating a state causes a re-render
        setInitialRenderComplete(true);
    }, []);

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [steps, setSteps] = useState('');
    const [show, setShow] = React.useState(false);
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
    const [multiline, setMultiline] = useState('');
    const [multiline2, setMultiline2] = useState('');
    const [num, setNum] = React.useState();
    const [text, setText] = React.useState('');
    const [text2, setText2] = React.useState('');
    const [err, setErr] = React.useState(false);
    const [err2, setErr2] = React.useState(false);
    const [help, setHelp] = React.useState('');
    const [help2, setHelp2] = React.useState('');
    const [displayTex, setDisplayTex] = React.useState({
        Ingredient: '',
        Measure: '',
        Quantity: ''
    });

    //Handle changes to form inputs
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDescChange = (e) => {
        setDesc(e.target.value);
    };

    const handleStepsChange = (e) => {
        setSteps(e.target.value);
    };

    const handlechange = (event) => {
        const regex = /^\d*\.?\d{0,2}$/g;
        if (event.target.value === "" || regex.test(event.target.value)) {
          setNum(event.target.value);
        } 
    };

    const handleText = (Eve) => {
        const regex = /[^a-zA-Z0-9\s]/g;
        if (!(regex.test(Eve.target.value))) {
            setText(Eve.target.value);
            setErr(false);
            setHelp("");
          }
        else
        {
            setErr(true);
            setHelp("Invalid_Character");
        }
          
    };

    const handletext = (eve) => {
        const regex = /[^a-zA-Z0-9\s]/g;
        if (!(regex.test(eve.target.value))) {
            setText2(eve.target.value);
            setErr2(false);
            setHelp2("");
          }
        else
        {
            setErr2(true);
            setHelp2("Invalid_Character");
        }
          
    };

    const handleAdd = async (eve) => {
            eve.preventDefault();

            var ingr = document.getElementById('ingr').value;
            var msr = document.getElementById('msr').value;
            var quant = document.getElementById('quant').value;
            
            console.log('Measure: ', msr);
            console.log('Quantity: ', quant);

            setDisplayTex({ingr,msr,quant});
            var item = document.getElementById('display').value;

            console.log('Display Text: ', item);

            //Serialize the form data as JSON
            var ingr_data = JSON.stringify([{ingr}]);
            console.log(ingr_data);

            const req = await fetch('http://localhost:3000/api/postToPantry', {
                method: 'POST', 
                body: ingr_data
            })
                _req => req.json()
                data => console.log(data)
                console.error(err)

                // Reset form values
                setText2('');
    }

    const handleSubmit = async (e) => {
            e.preventDefault();

            console.log('Name:', name);
            console.log('Description:', desc);
            console.log('Steps:', steps);

            //Serialize the form data as JSON
            var json_data = JSON.stringify([{name, desc, steps}]);
            console.log(json_data);

            //Send AJAX request to server-side
            const req = await fetch('http://localhost:3000/api/postToDb', {
                method: 'POST', 
                body: json_data
            })
                _req => req.json()
                data => console.log(data)
                console.error(err)
            
            // Reset the form values
            setName('');
            setDesc('');
            setSteps('');
    };

    //
    //Validate that no special characters are in textfields: " , - , + , basically all char
    //


    const measure = [
        { label: 'teaspoon', id: 1},
        { label: 'tablespoon', id: 2},
        { label: 'cup', id: 3},
        { label: 'quart', id: 4},
        { label: 'who uses gallons to measure', id: 5}
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
             <form onSubmit={handleSubmit} data-testid="form">
                <DialogTitle className="headerAM">
                    <Card className="titleAM" data-testid="title">Add Recipe</Card>
                    <Button className="generalBtnBlue BtnAM" data-testid="savebtn" type="submit" onClick={onSubmit}>SAVE</Button>
                    <Button className="generalBtnBlue BtnAM" onClick={handleClose} data-testid="closebtn">Close</Button>
                </DialogTitle>
             
             <DialogContent className="formContainerAM">
                    <Grid className="formGridAM">
                        <Button className="upImageAM" data-testid="uploadimg">upload image</Button>
                        <DialogContent className="nameDescContainerAM">
                            <TextField sx={{"& label":{top:".35rem"}}}className="generalAM nameAM" data-testid="nameentr" label="Name" name="name" value={name} onChange={handleNameChange}></TextField>
                            <TextField sx={{"& label":{top:".35rem"}}} className="generalAM descAM" multiline Value={multiline} onInput={(event => setMultiline(event.target.Value))} data-testid="descr" label="Description" name="description" onChange={handleDescChange} value={desc}></TextField>
                        </DialogContent>
                    </Grid>
                <DialogContent className="ingredContainerAM">
                    <Autocomplete  sx={{"& label":{top:".35rem"}}} className="generalAM ingredAM" freeSolo={true}  options={pantryItems} renderInput={(params) => <TextField {...params} label="Ingredient" error={err2} helperText={help2} type="text" onChange={(eve) => handletext(eve)} value={text2}/>} data-testid="ingr" id="ingr"></Autocomplete>
                    <TextField sx={{"& label":{top:".35rem"}}} className="generalAM qtyAM" data-testid="quant" label="#" type="text" onChange={(event) => handlechange(event)} value={num} id="quant"></TextField>
                    <Autocomplete sx={{"& label":{top:".35rem"}}} className="generalAM measurementAM" freeSolo={true}  options={measure} renderInput={(params) => <TextField {...params} label="Measure" error={err} helperText={help} type="text" onChange={(Eve) => handleText(Eve)} value={text}/>}data-testid="msr" id="msr"></Autocomplete>
                    <Button sx={{"& label":{top:".35rem"}}} className="generalBtnBlue addIngredAM" data-testid="add" onClick={handleAdd}>Add</Button>
                </DialogContent>
                    <Typography className="generalAM ingredBoxAM" data-testid="display" id="display" label="Display" name="disp" value={displayTex}>Ingredients displayed here:</Typography>
                    <TextField sx={{"& label":{top:".35rem"}}} className="generalAM stepsAM" data-testid="steps" label="Steps" name="steps" value={steps} onChange={handleStepsChange}multiline Values={multiline2} onInput={event => setMultiline2(event.target.Values)}>Steps...</TextField>
                </DialogContent>
                </form>
            </Dialog>
            </div>
            </div>
    );
    }  
};
export default AddRecipeModal;