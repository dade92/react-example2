import React, { useState } from "react";
import {Alert, Button, Snackbar} from "@mui/material";
import {useStompClient} from "react-stomp-hooks";
import {useTranslations} from "./TranslationsConfiguration";

export const NeedHelp: React.FC = () => {
    const stompClient = useStompClient();
    const { translationRepository } = useTranslations();
    const [called, setCalled] = useState<boolean>(false);

    const callNeedHelp = () => {
        if(stompClient?.connected) {
            stompClient?.publish({
                destination: `/app/needHelp`,
                body: JSON.stringify({'message': 'Hello from frontend!'})
            })
            setCalled(true);
        }
    }

    return (
        <>
            <Button color="secondary" onClick={callNeedHelp}>
                {translationRepository('appflow.needHelp.title')}
            </Button>
            {
                called && <Snackbar open={called} autoHideDuration={2000} onClose={() => setCalled(false)}>
                <Alert  severity="success" sx={{width: '100%'}}>
                    {translationRepository('appflow.needHelp.called')}
                </Alert>
            </Snackbar>
            }
        </>
    )
}