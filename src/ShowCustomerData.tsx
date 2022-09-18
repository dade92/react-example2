import React from "react";
import { Name, Name2, Name3 } from './Name';
import styled from "styled-components";
import { useUserConfiguration } from "./CustomerConfiguration";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const ShowCustomerData: React.FC = () => {
    const {name} = useUserConfiguration()

    return (
        <>
            <Title>Title</Title>
            <Name name={name} surname='Botti' onClick={() => {console.log('clicked!')}}/>
            <Name2 name={name} surname='Botti' onClick={() => {console.log('clicked!')}}/>
            <Name3 name={name} surname='Botti' onClick={() => {console.log('clicked!')}}/>
        </>
    )
}