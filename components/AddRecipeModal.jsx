/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { Dialog, Button, Typography, Card, Autocomplete, Select, DialogTitle, DialogContent, autocompleteClasses, Container, onSubmit, onChange, formData} from "@mui/material";
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-fetch'
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

function AddRecipeModal(){

    // const [formData, setFormData] = useState({
    //     name: "",
    //     desc: "",
    //     steps: ""
    // });

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [steps, setSteps] = useState('');

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

    // const handleChange = (e) => {
    //     var { name, value } = e.target;
    //     var { desc, value } = e.target;
    //     var { steps, value } = e.target;
    //     //const { desc, value2 } = e.target;
    //     setFormData((_formData) => (
    //         {  [name]: value },
    //         { [desc]: value },
    //         { [steps]: value }
    //         ));
    //     console.log(name.value);
    //     //console.log(value2);
    //     //console.log(value3);
    // };

    const handleSubmit = async (e) => {
            e.preventDefault();
            //router.use(bodyParser.json());

            console.log('Name:', name);
            console.log('Description:', desc);
            console.log('Steps:', steps);

            //Serialize the form data as JSON
            var json_data = JSON.stringify([{name, desc, steps}]);
            console.log(json_data);

            //Send AJAX request to server-side
            const req = await fetch('/api/postToDb', {
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
    const [num, setNum] = React.useState();
    const [text, setText] = React.useState('');
    const [text2, setText2] = React.useState('');
    const [err, setErr] = React.useState(false);
    const [err2, setErr2] = React.useState(false);
    const [help, setHelp] = React.useState('');
    const [help2, setHelp2] = React.useState('');

    const handlechange = (event) => {
      const regex = /^\d*\.?\d{0,2}$/g;
      if (event.target.value === "" || regex.test(event.target.value)) {
        setNum(event.target.value);
      }
    //   else
    //   {
    //     setNum("")
    //   }
      
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
    //
    //Validate that no special characters are in textfields: " , - , + , basically all char
    //

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
                            <TextField sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', marginBottom: 2, maxWidth: 200}} data-testid="nameentr" label="Name" name="name" value={name} onChange={handleNameChange}></TextField>
                            <TextField sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', maxWidth: 200}} multiline Value={multiline} onInput={(event => setMultiline(event.target.Value))} data-testid="descr" label="Description" name="description" onChange={handleDescChange} value={desc}></TextField>
                        </DialogContent>
                    </Grid>
                <DialogContent sx={{display: 'flex', justifyContent: 'flex-start', pl: 0}}>
                    <Autocomplete  sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 0.5, mr: 2, height: 55}} freeSolo={true}  options={plchldr} renderInput={(params) => <TextField {...params} label="Ingredient" error={err2} helperText={help2} type="text" onChange={(eve) => handletext(eve)} value={text2}/>} data-testid="ingr"></Autocomplete>
                    <TextField  sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 0.2, mr: 2, height: 55}} data-testid="quant" label="#" type="text" onChange={(event) => handlechange(event)} value={num}></TextField>
                    <Autocomplete sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 0.25, mr: 2, height: 55}} freeSolo={true}  options={measure} renderInput={(params) => <TextField {...params} label="Measure" error={err} helperText={help} type="text" onChange={(Eve) => handleText(Eve)} value={text}/>}data-testid="msr" ></Autocomplete>
                    <Card sx={{my: 1, width: 85, px: 0.4, py: 0.5, backgroundColor: '#023047'}}><Button sx={{backgroundColor: '#126782', color: '#8ECAE6', fontSize: 14}} data-testid="add">Add</Button></Card>
                </DialogContent>
                    <Typography sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold'}} data-testid="display" >Ingredients displayed here:</Typography>
                    <TextField sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 1, marginTop: 3}} data-testid="steps" label="Steps" name="steps" value={steps} onChange={handleStepsChange}multiline Values={multiline2} onInput={event => setMultiline2(event.target.Values)}>Steps...</TextField>
                </DialogContent>
                </form>
            </Dialog>
            </div>
            </div>
    );
    }  
};
export default AddRecipeModal;