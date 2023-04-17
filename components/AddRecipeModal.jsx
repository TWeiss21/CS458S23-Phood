/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { Dialog, Button, Typography, Card, Autocomplete, Select, DialogTitle, DialogContent, autocompleteClasses, Container, onSubmit, onChange, formData} from "@mui/material";
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-fetch'
const pantry = require('../mocks/pantryData.json')

var pantryItems = []
pantry.forEach(i => pantryItems.push(i.name))

function AddRecipeModal(){

    //string myscript = " <script> function DupAlert() { alert('Cannot add. Item already exists.');}</script>";
    //const [errorMessage, setErrorMessage] = useState("");
    const [initialRenderComplete, setInitialRenderComplete] = React.useState(false);
    // This useEffect will only run once, during the first render
    React.useEffect(() => {
        // Updating a state causes a re-render
        setInitialRenderComplete(true);
    }, []);

    const [message, setMessage] = useState("");
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [steps, setSteps] = useState('');
    const [show, setShow] = React.useState(false);
    const handleOpen = () => setShow(true);
    const handleClose = async () => {
        setShow(false);
        window.location.reload();
        window.location.reload();
    }
    const [multiline, setMultiline] = useState('');
    const [multiline2, setMultiline2] = useState('');
    const [num, setNum] = React.useState();
    const [text, setText] = React.useState('');
    const [text2, setText2] = React.useState('');
    const [nameErr, setNameErr] = React.useState(false);
    const [descErr, setDescErr] = React.useState(false);
    const [stepErr, setStepErr] = React.useState(false);
    const [err, setErr] = React.useState(false);
    const [err2, setErr2] = React.useState(false);
    const [err3, setErr3] = React.useState(false);
    const [help, setHelp] = React.useState('');
    const [help2, setHelp2] = React.useState('');
    const [help3, setHelp3] = React.useState('');
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
        if (regex.test(event.target.value)) 
        {  
            setNum(event.target.value);
            setErr3(false);
            setHelp3("");
            
        }
        else
        {
             setErr3(true);
             setHelp3("Invalid_Character");
        }
        //check text2 against regex values in the
        //case of copy/paste injections
    };
    const handlechangeKeyPress = (event) => {
        const regex = /[^\d\.]$/g;
        if (regex.test(event.key))
        {
            event.preventDefault();
            setErr3(true);
            setHelp3("Invalid_Character");
        }
    }

    const handleText = (Eve) => {
        setText(Eve.target.value);
        //check text2 against regex values in the
        //case of copy/paste injections
    };
    const handleTextKeyPress = (Eve) => {
        const regex = /[^a-zA-Z0-9\s]/g;
        if (regex.test(Eve.key))
        {
            Eve.preventDefault();
            setErr(true);
            setHelp("Invalid_Character");
        }
        else
        {
            setErr(false);
            setHelp("");
        }
    };

    const handletext = (eve) => {
        setText2(eve.target.value);
        //check text2 against regex values in the
        //case of copy/paste injections
    };
    const handletextKeyPress = (eve) => {
        const regex = /[^a-zA-Z0-9\s]/g;
        if (regex.test(eve.key))
        {
            eve.preventDefault();
            setErr2(true);
            setHelp2("Invalid_Character");
        }
        else {
            setErr2(false);
            setHelp2("");
        }

          
    };

    const handleAdd = async () => {

            var name = document.getElementById('ingr').value;
            var msr = document.getElementById('msr').value;
            var quant = document.getElementById('quant').value;

            if(!name)
            {
                setErr2(true);
            }
            if(!msr)
            {
                setErr(true);
            }
            if(!quant)
            {
                setErr3(true);
            }
            else{

            
            console.log('Measure: ', msr);
            console.log('Quantity: ', quant);

            setDisplayTex(JSON.stringify[{ingr,msr,quant}]);
            var item = JSON.stringify[{ingr,msr,quant}];

            console.log('Display Text: ', item);

            //Serialize the form data as JSON
            var ingr_data = JSON.stringify([{name}]);
            console.log(ingr_data);

                try{
                    const req = await fetch('http://localhost:3000/api/postToPantry', {
                    method: 'POST', 
                    body: ingr_data
                })
                if (req.ok) {
                    setMessage("");
                } else {
                    setMessage("Cannot add. Duplicate item.");
                }
                } catch (err) {
                    console.error(err);
                    console.log("This is an error");
                    setMessage("Cannot add.");
                }  
                // try{
                //     const req2 = await fetch('http://localhost:3000/api/postToIngr', {
                //         method: 'POST',
                //         body: item
                //     })
                //     if(req2.ok) {
                //         setMessage("Post request successful");
                //     } } catch (err) {
                //         console.error(err);
                //         console.log("This is an error");
                //     }
                    
                    // Reset form values
                    setText('');
                    setText2('');
                    setNum();
                    //setMessage('');
                    // setErr(false);
                    // setErr2(false);
                    // setErr3(false);
            }
    };

    const handleSubmit = async (e) => {
            e.preventDefault();

            console.log('Name:', name);
            console.log('Description:', desc);
            console.log('Steps:', steps);

            if(!name)
            {
                setNameErr(true);
            }
            if(!desc)
            {
                setDescErr(true);
            }
            if(!steps)
            {
                setStepErr(true);
            }
            else
            {
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
}

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
            <Button className="generalBtn addRecipeBtn"  data-testid="openModal" onClick={handleOpen}>Add Recipe</Button>
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
                            <TextField sx={{"& label":{top:".35rem"}}}className="generalAM nameAM" data-testid="nameentr" label="Name" name="name" value={name} error={nameErr} onChange={handleNameChange}></TextField>
                            <TextField sx={{"& label":{top:".35rem"}}} className="generalAM descAM" multiline Value={multiline} onInput={(event => setMultiline(event.target.Value))} data-testid="descr" label="Description" name="description" error={descErr} onChange={handleDescChange} value={desc}></TextField>
                        </DialogContent>
                    </Grid>
                <DialogContent className="ingredContainerAM">
                    <Autocomplete  sx={{"& label":{top:".35rem"}}} className="generalAM ingredAM" freeSolo={true}  options={pantryItems} renderInput={(params) => <TextField {...params} label="Ingredient" error={err2} helperText={help2} type="text" onChange={(eve) => handletext(eve)} onKeyPress={(eve) => handletextKeyPress(eve)} value={text2}/>} data-testid="ingr" id="ingr"></Autocomplete>
                    {message && <div>{message}</div>}
                    <TextField sx={{"& label":{top:".35rem"}}} className="generalAM qtyAM" data-testid="quant" label="#" type="text" onChange={(event) => handlechange(event)} onKeyPress={(event => handlechangeKeyPress(event))} value={num} id="quant"></TextField>
                    <Autocomplete sx={{"& label":{top:".35rem"}}} className="generalAM measurementAM" freeSolo={true}  options={measure} renderInput={(params) => <TextField {...params} label="Measure" error={err} helperText={help} type="text" onChange={(Eve) => handleText(Eve)} onKeyPress={(Eve) => handleTextKeyPress(Eve)} value={text}/>}data-testid="msr" id="msr"></Autocomplete>
                    <Button sx={{"& label":{top:".35rem"}}} className="generalBtnBlue addIngredAM" data-testid="add" onClick={handleAdd}>Add</Button>
                </DialogContent>
                    <Typography className="generalAM ingredBoxAM" data-testid="display" id="display" label="Display" name="disp" value={displayTex}>Ingredients displayed here:</Typography>
                    <TextField sx={{"& label":{top:".35rem"}}} className="generalAM stepsAM" data-testid="steps" label="Steps" name="steps" value={steps} error={stepErr} onChange={handleStepsChange}multiline Values={multiline2} onInput={event => setMultiline2(event.target.Values)}>Steps...</TextField>
                </DialogContent>
                </form>
            </Dialog>
            </div>
            </div>
    );
    }  
};
export default AddRecipeModal;