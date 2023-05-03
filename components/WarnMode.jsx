import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { useState } from 'react'
import React from 'react'

/** 
 * The Warn mode is a pop up that takes the properties
 * name = This is the name displayed on the button that will initiate the warning pop up. Seen on the component where WarnMode is called.
 * message = The warning message displayed in the warning model
 * affirmitiveAction = The name of the button that will exicute the submit action, clicked to agree to changes
 * negativeAction = The button to give the user the option to back out. Clicked to change nothing.
 * functionWarnedAgainst = this is the function that will make the changes. passing it to the warning gives control to the model as to if the function is executed.
*/
const WarnMode = (props) => {

// This comp. has state an 'open state' value and a fuction for modifying that state.
const [open, setOpen] = useState(false)

// Functions
//NOT sure if keeping the anynomus function will be better in the on click or if we should sep. into named function.
// function onSubmit(){
//     props.clearSL()
// }

return(
    // React.Fragment is dumb boilerplate since all react comp must exist in a hirarchy with a root for each file.
    <div className="btnSpace centered">
        
    {/* Here is the button we see on the "RecipeList right now.
    Once we have the Add recipe and any other decision point we can just call this component to reuse the 'are your sure functionality.'" */}
    <Button className="generalBtn shopInteractiveBtns" onClick={() => setOpen(true)}>{props.name}</Button>
    
    {/* Dialog open state is set to the current val of open.. in this case open is currentlly false so when the Dialog Renders it is not open. */}
    <Dialog 
    open={open}
    onClose={()=> setOpen(false)}
    aria-labelledby='dialogTitle' aria-describedby='dialogText'>
        <DialogTitle
        sx={{bgcolor: '#ff8500', color: 'red', align: 'right'}}
        id='dialogTitle'>
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
                sx={{ bgcolor: '#126782', color: '#8ecae6' }}
                autoFocus onClick={()=> setOpen(false)}>{props.negativeAction}</Button>
                <Button 
                sx={{ bgcolor: '#126782', color: '#8ecae6' }}
                onClick={
                    ()=> {
                        props.functionWarnedAgainst()
                        setOpen(false)
                    }

                    }>{props.affirmitiveAction}</Button>
            </DialogActions>
        </DialogContent>
    </Dialog> 
    </div>
)
}

export default WarnMode