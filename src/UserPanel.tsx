import { useEffect, useState } from "react";
import { RemoteUser } from "./Data";
import { useRestClient } from "./RestClientConfiguration";
import { LoaderUsers } from "./LoaderUsers";
import { Typography } from "@mui/material";
import { useTranslations } from "./TranslationsConfiguration";
import styled from "styled-components";

const HI_KEY = 'appflow.customerData.hi';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
`;

export const UserPanel: React.FC = () => {
    const restClient = useRestClient();
    const { translationRepository } = useTranslations();
    const [remoteUser, setRemoteUser] = useState<RemoteUser>();
    const [loadError, setLoadError] = useState<boolean>(false);
    
    const fetchData = async () => {
        restClient.get<RemoteUser>('/find?name=Davide')
        .then((response)=> {
            setRemoteUser(response);
        })
        .catch((e)=> {
            setLoadError(true);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    
    return (
        <Wrapper>
            {remoteUser == undefined ?
                <LoaderUsers error={loadError}/> :
                <Typography variant="body1" data-testid={'username'} gutterBottom>{translationRepository(HI_KEY)} {remoteUser?.name} {remoteUser?.surname}</Typography>}
        </Wrapper>
    )
}