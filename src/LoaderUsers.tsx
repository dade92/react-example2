import {Alert, AlertTitle, CircularProgress} from "@mui/material";
import {FC} from "react";
import { useTranslations } from "./TranslationsConfiguration";
import styled from "styled-components";

interface Props {
    error: boolean;
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
`;

export const LoaderUsers: FC<Props> = ({error}) => {
    const { translationRepository } = useTranslations();

    return (
        <Wrapper>
            {
                error
                    ? <Alert data-testid={'error-label'} severity="warning">
                        {translationRepository('appflow.customerData.noUser')}
                      </Alert>
                    : <CircularProgress data-testid={'loader'}/>
            }
        </Wrapper>
    );
}