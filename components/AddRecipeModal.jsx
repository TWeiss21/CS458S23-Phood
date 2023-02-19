import React from 'react'
import { Modal, Button, Typography, Card, Autocomplete, Select } from "@mui/material";
import TextField from "@mui/material/TextField"
export function AddRecipeModal(){

    const [show, setShow] = React.useState(false);
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
    
    return (
        <div><Button onClick={handleOpen}>Add Recipe</Button>
            <Modal open={show} OnClose={handleClose}>
                <Typography>Add Recipe</Typography>
                <Button>SAVE</Button>
                <Button>Close</Button>
                <Card>
                <Button>upload image</Button>
                <TextField>Enter Name...</TextField>
                <TextField>Enter Description...</TextField>
                <Autocomplete>Search Ingredient...</Autocomplete>
                <Select>#...</Select>
                <Autocomplete>Measure...</Autocomplete>
                <Button>Add</Button>
                <Typography>Ingredients displayed here:</Typography>
                <TextField>Steps...</TextField>
                </Card>
            </Modal>
        </div>
    );
    
};
export default AddRecipeModal;