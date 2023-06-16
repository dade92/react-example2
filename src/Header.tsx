import React from "react";
import styled from "styled-components";
import {NeedHelp} from "./NeedHelp";

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: normal;
    background-color: white;
    border: 2px;
`;

export const Header: React.FC = () => {
    return <HeaderWrapper>
        <span>AppFlow</span>
        <NeedHelp/>
    </HeaderWrapper>
}