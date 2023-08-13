import {Button, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack} from "@mui/material";
import React, {useCallback, useEffect, useState} from "react";
import {RemoteUser} from "./Data";
import CommentIcon from '@mui/icons-material/Comment';
import {RemoteUserResponse} from "./RemoteUserResponseAdapter";
import {LoaderUsers} from "./LoaderUsers";
import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {ConfirmationModal} from "./ConfirmationModal";
import { useRestClient } from "./RestClientConfiguration";
import { useTranslations } from "./TranslationsConfiguration";
import { StackContainer } from "./StackContainer";
import { Actions } from "./Actions";
import { MyCarousel } from "./Carousel";

export enum Action {
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

export const ShowCustomers: React.FC<Props> = ({onUndo, onSubmit, onModalConfirm, onModalClose, isModalOpen}) => {
    const [users, setUsers] = useState<RemoteUser[]>([]);
    const [loaderError, setLoaderError] = useState<boolean>(false);
    const restClient = useRestClient();
    const { translationRepository } = useTranslations();

    const fetchData = useCallback(() => {
        restClient.get<RemoteUserResponse>('/retrieveUsers')
                            .then(r => {
                                    setUsers(r.users);
                                    if(r.users.length === 0) {
                                        setLoaderError(true);
                                    }
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
            <StackContainer>
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

                <Actions handleClick={(action: Action) => handleClick(action)}/>

                <Divider/>

                <MyCarousel/>
                <ButtonContainer>
                    <Button variant="outlined" color="secondary" data-testid={'undo-button'} onClick={onUndo}
                            startIcon={<ArrowBackIcon/>}>{translationRepository('appflow.customerData.undo')}</Button>
                    <Button variant="contained" color="success" data-testid={'submit-button'} onClick={() => {
                        onSubmit()
                    }}>{translationRepository('appflow.customerData.submit')}</Button>
                </ButtonContainer>
            </StackContainer>
            {
                isModalOpen && <ConfirmationModal isOpen={isModalOpen} onClose={onModalClose} onConfirm={onModalConfirm}/>
            }
        </>
    );
}