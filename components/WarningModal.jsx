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
    <Button onClick={() => setOpen(true)} data-testid="wrnBtn">{props.name}</Button>
    
    {/* Dialog open state is set to the current val of open.. in this case open is currentlly false so when the Dialog Renders it is not open. */}
    <Dialog 
    open={open}
    onClose={()=> setOpen(false)}
    aria-labelledby='dialogTitle' aria-describedby='dialogText'>
        <DialogTitle
        sx={{bgcolor: '#ff8500', color: 'red', align: 'right'}}
        id='dialogTitle' data-testid="title">
            <h1>
            Warning!
            </h1>
        </DialogTitle>
        <DialogContent 
        sx={{bgcolor: '#ffdfbf'}}
        aria-labelledby='dialogText'>
            <DialogContentText>
                {props.message}
            </DialogContentText>
            <DialogActions>
                {/* We will need to change these onclick functions later to standardize which button was clicked and respond accordingly */}
                <Button 
                sx={{ bgcolor: '#126782', color: '#8ecae6' }} data-testid="cncl"
                autoFocus onClick={()=> setOpen(false)}>Cancel</Button>
                <Button 
                sx={{ bgcolor: '#126782', color: '#8ecae6' }} data-testid="sbmt"
                onClick={()=> setOpen(false)}>Submit</Button>
            </DialogActions>
        </DialogContent>
    </Dialog>
    </React.Fragment>
)
}
export default WarnMode;