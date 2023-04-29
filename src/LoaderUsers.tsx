import {CircularProgress} from "@mui/material";
import {FC} from "react";
import { useTranslations } from "./TranslationsConfiguration";
import styled from "styled-components";

interface Props {
    error: boolean;
}

const Wrapper = styled.div`
    margin-bottom: 8px;
`;

export const LoaderUsers: FC<Props> = ({error}) => {
    const { translationRepository } = useTranslations();

    return (
        <Wrapper>
            {
                error
                    ? <span data-testid={'error-label'}>{translationRepository('appflow.customerData.noUser')}</span>
                    : <CircularProgress data-testid={'loader'}/>
            }
        </Wrapper>
    );
}