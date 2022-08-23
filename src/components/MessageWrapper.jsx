import {Box} from "@material-ui/core";
import {useSelector} from "react-redux";

export const MessageWrapper = () => {
    const messages = useSelector(state => state.mainPage.userMessages)

    return <Box>
        {messages.length ?
            messages.map(message => {
                return <Box key={message.id}>
                    By {message.author} at {message.date}
                    {message.text}
                </Box>
            })
            : 'No messages yet'}
    </Box>
}