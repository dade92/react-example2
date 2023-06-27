import {Alert, Snackbar} from "@mui/material";
import React, {useState} from "react";
import {useSubscription} from "react-stomp-hooks";
import {TextMessage} from "./NotificationManager";


export const ConditionalSubscriber: React.FC = () =>
    process.env.REACT_APP_STAGE === 'local' ? null : <SubscriberComponent/>

export const SubscriberComponent: React.FC = () => {
    const [lastMessage, setLastMessage] = useState<string | null>(null);

    useSubscription(
        "/topic/message",
        (message) => setLastMessage((JSON.parse(message.body) as TextMessage).message)
    );

    const handleClose = () => {
        setLastMessage(null);
    }

    return (
        <>
            {lastMessage !== null &&
                <Snackbar open={lastMessage !== null} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                        {lastMessage}
                    </Alert>
                </Snackbar>
            }
        </>

    );
}
