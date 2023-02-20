import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { useState } from 'react'
import React from 'react'

//Always remember to exprot our comp. funct. cant use outside of this file otherwise.
export const WarnMode = (props) => {

// This comp. has state an 'open state' value and a fuction for modifying that state.
const [open, setOpen] = useState(false)

return(
    // React.Fragment is dumb boilerplate since all react comp must exist in a hirarchy with a root for each file.
    <React.Fragment>

    {/* Here is the button we see on the "RecipeList right now.
    Once we have the Add recipe and any other decision point we can just call this component to reuse the 'are your sure functionality.'" */}
    <Button onClick={() => setOpen(true)}>{props.name}</Button>
    
    {/* Dialog open state is set to the current val of open.. in this case open is currentlly false so when the Dialog Renders it is not open. */}
    <Dialog 
    open={open}
    onClose={()=> setOpen(false)}
    aria-labelledby='dialogTitle' aria-describedby='dialogText'>
        <DialogTitle id='dialogTitle'>Submit the test?</DialogTitle>
        <DialogContent aria-labelledby='dialogText'>
            <DialogContentText>
                {props.message}
            </DialogContentText>
            <DialogActions>
                {/* We will need to change these onclick functions later to standardize which button was clicked and respond accordingly */}
                <Button autoFocus onClick={()=> setOpen(false)}>Cancel</Button>
                <Button onClick={()=> setOpen(false)}>Submit</Button>
            </DialogActions>
        </DialogContent>
    </Dialog>
    </React.Fragment>
)
}