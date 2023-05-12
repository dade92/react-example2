import React, {useState} from 'react';
import {AppFlow} from './AppFlow';
import "./App.css";
import RestClientConfiguration from "./RestClientConfiguration";
import {TranslationsConfiguration} from './TranslationsConfiguration';
import SockJsClient from 'react-stomp';

const SOCKET_URL = '/ws-message';

interface TextMessageDTO {
    message: string;
}

const App: React.FC = () => {

    const [message, setMessage] = useState('You server message here.');

    let onConnected = () => {
        console.log("Connected!!")
    }

    let onMessageReceived = (msg: TextMessageDTO) => {
        console.log(`Message received: ${msg.message}`)
        setMessage(msg.message);
    }


    return (
        <div className='AppFlow'>
            <SockJsClient
                url={SOCKET_URL}
                topics={['/topic/message']}
                onConnect={onConnected}
                onDisconnect={console.log("Disconnected!")}
                onMessage={(msg: TextMessageDTO) => onMessageReceived(msg)}
                debug={false}
            />
            <span>{message}</span>
            <RestClientConfiguration>
                <TranslationsConfiguration>
                    <AppFlow/>
                </TranslationsConfiguration>
            </RestClientConfiguration>
        </div>
    );
}

export default App;
