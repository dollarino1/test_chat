import './App.css';
import {Box} from "@material-ui/core";
import {Prompt} from "./components/Prompt";
import {Input} from "./components/Input";
import {useEffect, useState} from "react";
import {MessageWrapper} from "./components/MessageWrapper";
import {useSelector} from "react-redux";

function App() {
    const [openPrompt, setOpenPrompt] = useState(false)
    const userData = useSelector(state => state.mainPage.userData)
    useEffect(() => {
        setOpenPrompt(true)
    }, [])
  return (
    <div className="App">
        <header className='header'>
            {userData.name ? 'Hi ' + userData.name + '!' : 'Hi there!'}
        </header>
        <Box className='body'>
            <MessageWrapper />
        </Box>
        <Box className='text-bar'>
            <Input />
        </Box>
        <Prompt open={openPrompt} setOpen={setOpenPrompt}/>
    </div>
  );
}

export default App;
