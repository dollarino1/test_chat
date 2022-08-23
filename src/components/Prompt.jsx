import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setUserData} from "../redux/mainReducer";

export const Prompt = ({open, setOpen}) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const onPromptSubmit = () => {
        console.log(value)
        dispatch(setUserData({name: value}))
        setOpen(false)
    }
    return <Dialog open={open} onClose={setOpen}>
            <DialogTitle>Please enter your name</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To chat, please enter your name
                </DialogContentText>
                <TextField
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="My Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onPromptSubmit}>Ok</Button>
            </DialogActions>
        </Dialog>
}