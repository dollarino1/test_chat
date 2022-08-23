import {Box, Button, TextField} from "@material-ui/core";

export const Input = () => {
  return <Box style={{display: 'flex'}}>
      <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Type your message"
          type="email"
          fullWidth
          variant="standard"
      />
      <Button variant="contained">SEND</Button>
  </Box>
}