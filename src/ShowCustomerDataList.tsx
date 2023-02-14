import {Button, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack} from "@mui/material";
import React, {useCallback, useEffect, useState} from "react";
import {RemoteUser} from "./Data";
import CommentIcon from '@mui/icons-material/Comment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import {adaptUsers} from "./RemoteUserResponseAdapter";
import {LoaderUsers} from "./LoaderUsers";
import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {MyModal} from "./MyModal";
import {createCustomer} from "./CreateCustomer";

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

    //TODO fix this url too
    const fetchData = useCallback(async () => {
        await fetch('http://localhost:8081/retrieveUsers')
                            .then(data =>data.json())
                            .then(r => {
                                    console.log(r);
                                    setUsers(adaptUsers(r.users));
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
                                {user.name} - {user.surname} - {user.data.profile}
                            </ListItemText>
                        </ListItem>
                    }) : <LoaderUsers data-testid={'loader'} error={loaderError}/>
                }
                <Divider>ACTIONS</Divider>
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
                            startIcon={<ArrowBackIcon/>}>UNDO</Button>
                    <Button variant="contained" color="success" data-testid={'submit-button'} onClick={() => {
                        onSubmit()
                    }}>SUBMIT</Button>
                </ButtonContainer>
            </Stack>
            {
                isModalOpen && <MyModal isOpen={isModalOpen} onClose={onModalClose} onConfirm={onModalConfirm}/>
            }
        </>
    );
}