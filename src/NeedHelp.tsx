import React from "react";
import {Button} from "@mui/material";
import {useStompClient} from "react-stomp-hooks";

export const NeedHelp: React.FC = () => {
    const stompClient = useStompClient();

    const callNeedHelp = () => {
        stompClient?.publish({
            destination: `/app/needHelp`,
            body: JSON.stringify({'message': 'Hello from frontend!'})
        })
    }

    return (
        <Button color="secondary" onClick={callNeedHelp}>
            Need help?
        </Button>
    )
}