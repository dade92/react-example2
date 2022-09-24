import React from "react";
import Name from './Name';
import styled from "styled-components";
import { useUserConfiguration } from "./CustomerConfiguration";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const ShowCustomerData: React.FC = () => {
    const { name, surname } = useUserConfiguration()

    return (
        <>
            <Title data-testid="title">Title</Title>
            <Name name={name} surname={surname} onClick={() => {console.log('clicked!')}}/>
        </>
    )
}