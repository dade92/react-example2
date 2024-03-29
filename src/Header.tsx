import React from "react";
import styled from "styled-components";
import {NeedHelp} from "./NeedHelp";
import {isLocalEnv} from "./utils/Utils";

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: normal;
    background-color: #F5F5F5;
    border: 2px;
`;

const StyledSpan = styled.span`
    color: black;
    font-weight:bold;
    margin-left: 8px;
`;

// isLocalEnv() needed to avoid calling the stomp client init on local dev
export const Header: React.FC = () =>
    <HeaderWrapper>
        <StyledSpan>AppFlow</StyledSpan>
        {isLocalEnv() ? null : <NeedHelp/>}
    </HeaderWrapper>