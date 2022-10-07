import React from "react";
import Name from './Name';
import styled from "styled-components";
import { useUserConfiguration } from "./CustomerConfiguration";

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

    return (
        <>
            <Title data-testid="title">Title</Title>
            <Name name={name} surname={surname} onClick={()=>onClick(name)}/>
        </>
    )
}