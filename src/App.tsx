import React, {useState} from 'react';
import {AppFlow} from './AppFlow';
import "./App.css";
import RestClientConfiguration from "./RestClientConfiguration";
import {TranslationsConfiguration} from './TranslationsConfiguration';
import { NotificationManager } from './NotificationManager';
import {
    StompSessionProvider,
    useSubscription,
  } from "react-stomp-hooks";

const App: React.FC = () => {
    return (
        <div className='AppFlow'>
            <StompSessionProvider
                url={"/ws-message"}
                //All options supported by @stomp/stompjs can be used here
    >
        <SubscribingComponent />
            <RestClientConfiguration>
                <TranslationsConfiguration>
                    <AppFlow/>
                </TranslationsConfiguration>
            </RestClientConfiguration>
            </StompSessionProvider>
        </div>
    );
}

const SubscribingComponent:React.FC = () => {
    const [lastMessage, setLastMessage] = useState("No message received yet");

    //Subscribe to /topic/test, and use handler for all received messages
    //Note that all subscriptions made through the library are automatically removed when their owning component gets unmounted.
    //If the STOMP connection itself is lost they are however restored on reconnect.
    //You can also supply an array as the first parameter, which will subscribe to all destinations in the array
    useSubscription("/topic/message", (message) => setLastMessage(message.body));
  
    return (
      <div>Last Message: {lastMessage}</div>
    );
}
export default App;
