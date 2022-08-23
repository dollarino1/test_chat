import {Box, Button, TextField} from "@material-ui/core";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUserMessages} from "../redux/mainReducer";

export const Input = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const userName = useSelector(state => state.mainPage.userData.name)
    const handleSend = () => {
        const min = 1;
        const max = 10000000;
        const rand = min + Math.random() * (max - min);
        dispatch(setUserMessages({id: Math.floor(rand), author: userName, text: value, date: Date().toLocaleString()}))
    }
  return <Box style={{display: 'flex'}}>
      <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          margin="dense"
          id="name"
          label="Type your message"
          type="email"
          fullWidth
          variant="standard"
      />
      <Button variant="contained" onClick={handleSend}>SEND</Button>
  </Box>
}