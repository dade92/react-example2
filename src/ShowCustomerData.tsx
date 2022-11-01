import React, { useCallback, useEffect, useState } from "react";
import Name from './Name';
import styled from "styled-components";
import { useUserConfiguration } from "./CustomerConfiguration";
import { Alert, AlertTitle, Button, Checkbox, FormControlLabel, IconButton, Snackbar, TextField, Typography } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { RemoteUser } from "./Data";
import Stack from '@mui/material/Stack';
import { LoaderUsers } from "./LoaderUsers";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const UserContainer = styled.div`
  
`;

interface Props {
    onSubmit: (text: string, checked: boolean) => void;
}

export const ShowCustomerData: React.FC<Props> = ({ onSubmit }) => {
    const fetchData = useCallback(async () => {
        const data = await fetch('http://localhost:8081/retrieveUser');
        const response = await data.json();
        console.log(response);
        setRemoteUser({
            name: response.name,
            surname: response.surname,
            data: {
                profile: ''
            }
        })
    }, []);

    const submit = (text: string, checked: boolean) => {
        setValidInput(true);
        if (text.length >= 0 && text.length < 3) {
            setValidInput(false);
        } else {
            setSuccess(true);
            onSubmit(text, checked);
        }
    }

    useEffect(() => { fetchData() }, [fetchData])

    const { name, surname } = useUserConfiguration();
    const [text, setText] = useState<string>('');
    const [checked, setChecked] = useState(false);
    const [remoteUser, setRemoteUser] = useState<RemoteUser>();
    const [validInput, setValidInput] = useState(true);
    const [success, setSuccess] = useState(false);

    return (
        <Stack spacing={1} sx={{ width: 600 }} data-testid={'stack'}>
            <Title data-testid="title">AppFlow</Title>
            <div>
                {remoteUser == undefined ? 
                        <LoaderUsers error={false}/> : 
                        <Typography variant="body1" gutterBottom>Hi {remoteUser?.name} {remoteUser?.surname}</Typography>}
            </div>

            <TextField id="filled-basic" data-testid={'text'} label="Name" variant="outlined" onChange={(e) => setText(e.target.value)} />
            <FormControlLabel
                control={<Checkbox data-testid={'checkbox'} checked={checked} onChange={(e) => setChecked(e.target.checked)} />} label="Accept t&c" />
            <Button variant="contained" color="success" endIcon={<NavigateNextIcon />} data-testid={'submit-button'} onClick={() => submit(text, checked)} disabled={!checked}>Next</Button>

            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
            </IconButton>
            {
                !validInput && <Alert severity="warning" data-testid={'alert'}>
                    <AlertTitle>Warning</AlertTitle>
                    Input must be greater than 2 letters</Alert>
            }
            {
                <Snackbar open={success} autoHideDuration={2000} data-testid={'snackbar'} onClose={() => setSuccess(false)}>
                    <Alert severity="success" sx={{ width: '100%' }}>
                        Data inserted correctly!
                    </Alert>
                </Snackbar>

            }
        </Stack>
    )

}