import React, { useCallback, useEffect, useState } from "react";
import Name from './Name';
import styled from "styled-components";
import { useUserConfiguration } from "./CustomerConfiguration";
import { Alert, AlertTitle, Button, Checkbox, FormControlLabel, IconButton, Snackbar, TextField, Typography } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export interface RemoteUser {
    name: string;
    surname: string;
}

interface Props {
    onSubmit: (text: string, checked: boolean)=>void;
}

export const ShowCustomerData: React.FC<Props> = ({onSubmit}) => {
    const fetchData = useCallback(async () => {
        const data = await fetch('/retrieveUser');
        const response = await data.json();
        console.log(response);
        setRemoteUser({
            name: response.name,
            surname: response.surname
        })
      },[]);

    const submit = (text:string, checked:boolean) => {
        setValidInput(true);
        if(text.length >= 0 && text.length < 3) {
            setValidInput(false);
        } else {
            setSuccess(true);
            onSubmit(text, checked);
        }
    }

    useEffect(()=> { fetchData() }, [fetchData])

    const { name, surname } = useUserConfiguration();
    const [text, setText] = useState<string>('');
    const [remoteUser, setRemoteUser] = useState<RemoteUser>();
    const [checked, setChecked] = useState(true);
    const [validInput, setValidInput] = useState(true);
    const [success, setSuccess] = useState(false);

    return (
        <>
            <Title data-testid="title">Title</Title>
            <Name name={name} surname={surname} onClick={()=>console.log('clicked')}/>

            <TextField id="filled-basic" label="Name" variant="outlined" onChange={(e)=>setText(e.target.value)}/>
            <FormControlLabel 
                control={<Checkbox checked={checked} onChange={(e)=>setChecked(e.target.checked)}/>} label="Want this?" />
            <Button variant="contained" color="success" onClick={()=>submit(text, checked)}>SUBMIT</Button>
            <Typography variant="body1" gutterBottom>{remoteUser?.name} {remoteUser?.surname}</Typography>

            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
            </IconButton>
            {!validInput && 
                <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    Input must be greater than 2 letters</Alert>}
            {
             <Snackbar open={success} autoHideDuration={2000} onClose={()=>setSuccess(false)}>
                <Alert severity="success" sx={{ width: '100%' }}>
                  Congratulations!
                </Alert>
            </Snackbar>
              
            }
        </>
    )

}