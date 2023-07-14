import React from "react";
import styled from "styled-components";
import {NeedHelp} from "./NeedHelp";

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

export const Header: React.FC = () => {
    return <HeaderWrapper>
        <StyledSpan>AppFlow</StyledSpan>
        {process.env.REACT_APP_STAGE === 'local' ? null :  <NeedHelp/>}
    </HeaderWrapper>
}