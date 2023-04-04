import React, { useState } from 'react'
import { Dialog, Button, Typography, Card, Autocomplete, Select, DialogTitle, DialogContent, autocompleteClasses, Container} from "@mui/material";
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
const AddRecipeModal = () =>{

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
    const [err3, setErr3] = React.useState(false);
    const [help, setHelp] = React.useState('');
    const [help2, setHelp2] = React.useState('');
    const [help3, setHelp3] = React.useState('');

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
    
    return (
        <div><Button data-testid="openModal" onClick={handleOpen}>Add Recipe</Button>
             <Dialog open={show}>
                <DialogTitle sx={{my: 0, py: 0, backgroundColor: '#FD9E02' , display: 'flex', justifyContent: 'flex-end'}}>
                    <Card sx={{my: 0.3, mr: 3, px: 5, backgroundColor: '#126782', color: '#8ECAE6'}} data-testid="title">Add Recipe</Card>
                    <Card sx={{my: 1, mr: 2, pb: 0, px: 0.5, backgroundColor: '#023047'}}><Button sx={{fontSize: 10, backgroundColor: '#126782', color: '#8ECAE6'}} data-testid="savebtn">SAVE</Button></Card>
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
                    <Autocomplete  sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 0.5, mr: 2, height: 55}} freeSolo={true}  options={plchldr} renderInput={(params) => <TextField {...params} label="Ingredient" error={err2} helperText={help2} type="text" onChange={(eve) => handletext(eve)} onKeyPress={(eve) => handletextKeyPress(eve)} value={text2}/>} data-testid="ingr"></Autocomplete>
                    <TextField  sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 0.2, mr: 2, height: 55}} data-testid="quant" label="#" error={err3} helperText={help3} type="text" onChange={(event) => handlechange(event)} onKeyPress={(event => handlechangeKeyPress(event))} value={num}></TextField>
                    <Autocomplete sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 0.25, mr: 2, height: 55}} freeSolo={true}  options={measure} renderInput={(params) => <TextField {...params} label="Measure" error={err} helperText={help} type="text" onChange={(Eve) => handleText(Eve)} onKeyPress={(Eve) => handleTextKeyPress(Eve)} value={text}/>}data-testid="msr" ></Autocomplete>
                    <Card sx={{my: 1, width: 85, px: 0.4, py: 0.5, backgroundColor: '#023047'}}><Button sx={{backgroundColor: '#126782', color: '#8ECAE6', fontSize: 14}} data-testid="add">Add</Button></Card>
                </DialogContent>
                    <Typography sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold'}} data-testid="display">Ingredients displayed here:</Typography>
                    <TextField sx={{backgroundColor: '#ffffe7', color: '#010000', fontWeight: 'bold', width: 1, marginTop: 3}} data-testid="steps" multiline value={multiline2} onChange={e => setMultiline2(e.target.value)}>Steps...</TextField>
                </DialogContent> 
            </Dialog>
        </div>
    );
    
};
export default AddRecipeModal;