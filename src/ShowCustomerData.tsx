import React, { useState } from "react";
import Name from './Name';
import styled from "styled-components";
import { useUserConfiguration } from "./CustomerConfiguration";
import { Button, Checkbox, FormControlLabel, IconButton, TextField, Typography } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

interface Props {
    onClick: (text: string, checked: boolean)=>void;
}

export const ShowCustomerData: React.FC<Props> = ({onClick}) => {
    const { name, surname } = useUserConfiguration()
    const [text, setText] = useState('')
    const [checked, setChecked] = useState(false);

    return (
        <>
            <Title data-testid="title">Title</Title>
            <Name name={name} surname={surname} onClick={()=>console.log('clicked')}/>

            <TextField id="filled-basic" label="Name" variant="filled" onChange={(e)=>setText(e.target.value)}/>
            <FormControlLabel control={<Checkbox onChange={(e)=>setChecked(e.target.checked)}/>} label="Want this?" />
            <Button variant="contained" color="success" onClick={()=>onClick(text, checked)}>SUBMIT</Button>

            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
            </IconButton>
        </>
    )
}