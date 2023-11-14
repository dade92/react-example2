import React from "react";
import {LoaderUsers} from "./LoaderUsers";
import {Typography} from "@mui/material";
import {useTranslations} from "./TranslationsConfiguration";
import styled from "styled-components";
import {useUserPanelStore} from "./stores/UserPanelStore";
import {RetrieveSingleCustomerService} from "./services/RetrieveCustomersService";

const HI_KEY = 'appflow.customerData.hi';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
`;

interface Props {
    retrieveSingleCustomerService: RetrieveSingleCustomerService;
}

export const UserPanel: React.FC<Props> = ({retrieveSingleCustomerService}) => {
    const {states} = useUserPanelStore(retrieveSingleCustomerService);
    const { translationRepository } = useTranslations();
    
    return (
        <Wrapper>
            {states.remoteUser == undefined ?
                <LoaderUsers error={states.loadError}/> :
                <Typography variant="body1" data-testid='username' gutterBottom>
                    {translationRepository(HI_KEY)} {states.remoteUser.name} {states.remoteUser.surname}
                </Typography>}
        </Wrapper>
    )
}