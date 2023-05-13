import React, {useState} from 'react';
import {AppFlow} from './AppFlow';
import "./App.css";
import RestClientConfiguration from "./RestClientConfiguration";
import {TranslationsConfiguration} from './TranslationsConfiguration';
import { NotificationManager, TextMessage } from './NotificationManager';
import {
    StompSessionProvider,
    useSubscription,
  } from "react-stomp-hooks";
import { Alert, Snackbar } from '@mui/material';

const App: React.FC = () => {
    return (
        <div className='AppFlow'>
            <StompSessionProvider
                url={"/ws-message"}
                //All options supported by @stomp/stompjs can be used here
    >
        <h1>Test websocket</h1>
        <SubscribingComponent />
            {/* <RestClientConfiguration>
                <TranslationsConfiguration>
                    <AppFlow/>
                </TranslationsConfiguration>
            </RestClientConfiguration> */}
            </StompSessionProvider>
        </div>
    );
}

const SubscribingComponent:React.FC = () => {
    const [lastMessage, setLastMessage] = useState<string | null>(null);

    //Subscribe to /topic/test, and use handler for all received messages
    //Note that all subscriptions made through the library are automatically removed when their owning component gets unmounted.
    //If the STOMP connection itself is lost they are however restored on reconnect.
    //You can also supply an array as the first parameter, which will subscribe to all destinations in the array
    useSubscription("/topic/message", (message) => setLastMessage((JSON.parse(message.body) as TextMessage).message));
  
    const handleClose = () => {
        setLastMessage(null);
    }

    return (
        <>
        {lastMessage !== null && 
            <Snackbar open={lastMessage !== null} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                {lastMessage}
                </Alert>
            </Snackbar>
        }
        </>

    );
}
export default App;
