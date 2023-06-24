import React from "react";
import styled from "styled-components";
import {Header} from "./Header";

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 24px;
`;

export const Layout: React.FC = ({children}) => {
    return <LayoutWrapper>
        <Header/>
        {children}
    </LayoutWrapper>
}