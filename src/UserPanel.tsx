import {useEffect, useState} from "react";
import {RemoteUser} from "./Data";
import {LoaderUsers} from "./LoaderUsers";
import {Typography} from "@mui/material";
import {useTranslations} from "./TranslationsConfiguration";
import styled from "styled-components";
import {retrieveSingleCustomerRestService} from "./services/RetrieveCustomersService";
import {useUserPanelStore} from "./stores/UserPanelStore";

const HI_KEY = 'appflow.customerData.hi';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
`;

export const UserPanel: React.FC = () => {
    const {states} = useUserPanelStore();
    const { translationRepository } = useTranslations();
    
    return (
        <Wrapper>
            {states.remoteUser == undefined ?
                <LoaderUsers error={states.loadError}/> :
                <Typography variant="body1" data-testid={'username'} gutterBottom>
                    {translationRepository(HI_KEY)} {states.remoteUser.name} {states.remoteUser.surname}
                </Typography>}
        </Wrapper>
    )
}