import React from "react"
import {Grid, Button} from '@material-ui/core'

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function DialogPage_2(){
    const defaultFruits = 0
    const [apple_num, setApple_num] = React.useState(0)
    const [pear_num, setPear_num] = React.useState(0)
    const [peach_num, setPeach_num] = React.useState(0)
    const [open, setOpen] = React.useState(false)
   
    
    const handleAppleChange = (e) => {
        setApple_num(e.target.value)
    }

    const handlePearChange = (e) => {
        setPear_num(e.target.value)
    }    

    const handlePeachChange = (e) => {
        setPeach_num(e.target.value)
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSaveButtonPressed = () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                apples: apple_num,
                pears: pear_num,
                peaches: peach_num,
            })
        }
        fetch('/fruit_garden/create_round/', requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data))
        setOpen(false)
    }

        return (
            <div>
                <Button variant="contained" color="default" onClick={handleClickOpen}>
                        ADD FRUIT
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Fruit</DialogTitle>
                    <DialogContent>
                        <Grid container>
                            <Grid item xs={6}>
                                <DialogContentText>
                                    APPLE
                                </DialogContentText>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField type="number" defaultValue={defaultFruits} onChange={handleAppleChange} inputProps={
                                        {
                                            min: 0,
                                            max: 50-pear_num-peach_num,
                                        }
                                }/>
                            </Grid>
                            <Grid item xs={6}>
                                <DialogContentText>
                                    PEAR
                                </DialogContentText>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField type="number" defaultValue={defaultFruits} onChange={handlePearChange} inputProps={
                                        {
                                            min: 0,
                                            max: 50-apple_num-peach_num,
                                        }
                                }/>
                            </Grid>
                            <Grid item xs={6}>
                                <DialogContentText>
                                    PEACH
                                </DialogContentText>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField type="number" defaultValue={defaultFruits} onChange={handlePeachChange} inputProps={
                                        {
                                            min: 0,
                                            max: 50-apple_num-pear_num,
                                        }
                                }/>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                    <Button color="default" variant="contained" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button color="primary" variant="contained" onClick={handleSaveButtonPressed}>
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
}