import React, { useState } from "react";
import Name from './Name';
import styled from "styled-components";
import { useUserConfiguration } from "./CustomerConfiguration";
import { TextField, Typography } from "@mui/material";


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

interface Props {
    onClick: (name: string)=>void;
}

export const ShowCustomerData: React.FC<Props> = ({onClick}) => {
    const { name, surname } = useUserConfiguration()
    const [text, setText] = useState('')

    return (
        <>
            <Title data-testid="title">Title</Title>
            <Name name={name} surname={surname} onClick={()=>onClick(text   )}/>

            <TextField id="filled-basic" label="Name" variant="filled" onChange={(e)=>setText(e.target.value)}/>
            <Typography variant="h4" component="h2">{text}</Typography>
        </>
    )
}