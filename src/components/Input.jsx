import {Box, Button, TextField} from "@material-ui/core";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUserMessages} from "../redux/mainReducer";

export const Input = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [error, setError] = useState(false)
    const userName = useSelector(state => state.mainPage.userData.name)

    const handleSend = () => {
        if(!value) return setError(true)
        const min = 1;
        const max = 10000000;
        const rand = min + Math.random() * (max - min);
        const now = Date().toLocaleString().slice(0, 24)
        dispatch(setUserMessages({id: Math.floor(rand), author: userName, text: value, date: now}))
        setValue('')
        setError(false)
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
      {error && <Box style={{color: 'red'}}>Empty value</Box> }
  </Box>
}