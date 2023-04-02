import {Button, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack} from "@mui/material";
import React, {useCallback, useEffect, useState} from "react";
import {RemoteUser} from "./Data";
import CommentIcon from '@mui/icons-material/Comment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import {RemoteUserResponse} from "./RemoteUserResponseAdapter";
import {LoaderUsers} from "./LoaderUsers";
import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {MyModal} from "./MyModal";
import { useRestClientConfiguration } from "./RestClientConfiguration";
import { useTranslations } from "./TranslationsConfiguration";

enum Action {
    INBOX = "INBOX",
    DRAFTS = "DRAFTS"
}

interface Props {
    onUndo: () => void;
    onSubmit: () => void;
    onModalConfirm: () => void;
    onModalClose: () => void;
    isModalOpen: boolean;
}

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
`;

export const ShowCustomerDataList: React.FC<Props> = ({onUndo, onSubmit, onModalConfirm, onModalClose, isModalOpen}) => {
    const [users, setUsers] = useState<RemoteUser[]>([]);
    const [loaderError, setLoaderError] = useState<boolean>(false);
    const restClient = useRestClientConfiguration();
    const { translationRepository } = useTranslations();

    const fetchData = useCallback(() => {
        restClient.get<RemoteUserResponse>('/retrieveUsers')
                            .then(r => {
                                    console.log(r);
                                    setUsers(r.users);
                                })
                            .catch(error => {
                                console.log('error in loading users');
                                setLoaderError(true);
                            })

    }, []);

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const handleComment = (userName: string) => {
        console.log(userName);
    }

    const handleClick = (action: Action) => {
        console.log(action);
    }

    return (
        <>
            <Stack spacing={1} sx={{width: 600}}>
                {
                    users.length > 0 ? users.map((user, index) => {
                        return <ListItem
                            key={user.name}
                            data-testid={'user-item-' + `${index}`}
                            secondaryAction={
                                <IconButton aria-label="comment" onClick={() => handleComment(user.name)}>
                                    <CommentIcon/>
                                </IconButton>}
                        >
                            <ListItemText>
                                {user.name} - {user.surname}
                            </ListItemText>
                        </ListItem>
                    }) : <LoaderUsers data-testid={'loader'} error={loaderError}/>
                }
                <Divider>{translationRepository('appflow.customerData.actions')}</Divider>
                <ListItem disablePadding data-testid={'inbox-item'}>
                    <ListItemButton onClick={() => handleClick(Action.INBOX)}>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Inbox"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding data-testid={'drafts-item'}>
                    <ListItemButton onClick={() => handleClick(Action.DRAFTS)}>
                        <ListItemIcon>
                            <DraftsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Drafts"/>
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ButtonContainer>
                    <Button variant="outlined" color="secondary" data-testid={'undo-button'} onClick={onUndo}
                            startIcon={<ArrowBackIcon/>}>{translationRepository('appflow.customerData.undo')}</Button>
                    <Button variant="contained" color="success" data-testid={'submit-button'} onClick={() => {
                        onSubmit()
                    }}>{translationRepository('appflow.customerData.submit')}</Button>
                </ButtonContainer>
            </Stack>
            {
                isModalOpen && <MyModal isOpen={isModalOpen} onClose={onModalClose} onConfirm={onModalConfirm}/>
            }
        </>
    );
}