import React from "react";
import {Alert, Button} from "@mui/material";
import {CenterWrapper} from "./CenterWrapper";
import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

interface Props {
    onTryAgain: () => void;
}

export const ErrorPage: React.FC<Props> = ({onTryAgain}) =>
    (
        <CenterWrapper>
            <img data-testid={'error-img'} src="/error.png" alt="image"/>
            <Alert severity="error">
                <ErrorContainer>
                    <span data-testid={'error-message'}>Something went wrong.</span>
                    <Button color="secondary" component="label" startIcon={<ArrowBackIcon/>} onClick={onTryAgain} data-testid={'try-again-button'}>
                        Try again
                    </Button>
                </ErrorContainer>
            </Alert>
        </CenterWrapper>
    )