import './App.css';
import {Box} from "@material-ui/core";
import {Prompt} from "./components/Prompt";
import {Input} from "./components/Input";
import {useEffect, useState} from "react";

function App() {
    const [openPrompt, setOpenPrompt] = useState(false)
    useEffect(() => {
        setOpenPrompt(true)
    }, [])
  return (
    <div className="App">
        <header className='header'>
            Name Surname
        </header>
        <Box className='body'>
            Body
        </Box>
        <Box className='text-bar'>
            <Input />
        </Box>
        <Prompt open={openPrompt} setOpen={setOpenPrompt}/>
    </div>
  );
}

export default App;
