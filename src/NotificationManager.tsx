import { Snackbar } from "@mui/material";
import { useState } from "react";
import SockJsClient from 'react-stomp';

interface TextMessage {
    message: string;
}

const SOCKET_URL = '/ws-message';

export const NotificationManager: React.FC = () => {
    const [message, setMessage] = useState<string| null>(null);

    let onConnected = () => {
        console.log("Connected!!")
    }

    let onMessageReceived = (msg: TextMessage) => {
        console.log(`Message received: ${msg.message}`)
        setMessage(msg.message);
    }

    const handleClose = () => {
        setMessage(null);
    }


    return (
        <>
        <SockJsClient
            url={SOCKET_URL}
            topics={['/topic/message']}
            onConnect={onConnected}
            onDisconnect={console.log("Disconnected!")}
            onMessage={(msg: TextMessage) => onMessageReceived(msg)}
            debug={false} />

        {message !== null && <Snackbar
            open={message !== null}
            autoHideDuration={2000}
            message={message}
            onClose={handleClose}
          />}
          </>
    );
}