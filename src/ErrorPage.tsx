import React from "react";
import {Alert, Button} from "@mui/material";
import {CenterWrapper} from "./ThankYouPage";
import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

interface Props {
    onTryAgain: () => void;
}

export const ErrorPage: React.FC<Props> = ({onTryAgain}) => {
    return (
        <CenterWrapper>
            <img src="/error.png" alt="image" />
            <Alert severity="error">
                <ErrorContainer>
                    <span>Something went wrong.</span>
                    <Button color="secondary" component="label" startIcon={<ArrowBackIcon/>} onClick={onTryAgain}>
                        Try again
                    </Button>
                </ErrorContainer>
            </Alert>
        </CenterWrapper>
    )
}