import styled from "styled-components";

export const StackContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media only screen and (min-width: 768px) {
        width: 50%;
    }
    gap: 16px;
`