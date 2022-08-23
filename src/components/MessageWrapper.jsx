import {Box} from "@material-ui/core";
import {useSelector} from "react-redux";

export const MessageWrapper = () => {
    const messages = useSelector(state => state.mainPage.userMessages)

    return <Box style={{display: 'flex', justifyContent: 'end', flexDirection: 'column', width: 'fit-content'}}>
        {messages.length ?
            messages.map(message => {
                return <Box key={message.id} style={{background: '#b50303a8', marginBottom: '10px', borderRadius: '15px 15px 0px 15px', padding: '10px'}}>
                    <Box style={{fontSize: '12px'}}>
                        By <strong>{message.author}</strong> at {message.date} <br />
                    </Box>

                    {message.text}
                </Box>
            })
            : 'No messages yet'}
    </Box>
}