/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { Dialog, Button, Typography, Card, Autocomplete, Select, DialogTitle, DialogContent, autocompleteClasses, Container, onSubmit, onChange, formData} from "@mui/material";
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"

function AddRecipeModal(){
    const [show, setShow] = React.useState(false);
    const handleOpen = () => setShow(true);
    const handleClose = async () => {
        setShow(false);
    }
    
    return (
            <div>
            <Button className="generalBtn shopInteractiveBtns exportLong" data-testid="openModal" onClick={handleOpen}>Export</Button>
                <div>
                    <Dialog open={show}>
                        <DialogTitle className="headerNAM">
                            <Card className="titleNAM" data-testid="title">Export</Card>
                            <Button className="generalBtnBlue BtnAM" onClick={handleClose} data-testid="closebtn">Close</Button>
                        </DialogTitle >
                        <DialogContent className="formContainerNAM">
                            <div className ="btnContainerPadding">
                                <Button className="generalBtnBlue btnPaddingRight">SNS</Button>
                                <Button className="generalBtnBlue btnPaddingLeft">CSV</Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
    );
      
};
export default AddRecipeModal;