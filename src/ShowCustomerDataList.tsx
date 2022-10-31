import {Box, Button, CircularProgress, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import React, {useCallback, useEffect, useState} from "react";
import {RemoteUser} from "./Data";
import CommentIcon from '@mui/icons-material/Comment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import {adaptUsers} from "./RemoteUserResponseAdapter";
import { LoaderUsers } from "./LoaderUsers";

enum Action {
    INBOX = "INBOX",
    DRAFTS = "DRAFTS"
}

interface Props {
    onUndo: ()=>void;
}

export const ShowCustomerDataList: React.FC<Props> = ({onUndo}) => {
    const [users, setUsers] = useState<RemoteUser[]>([]);
    const [loaderError, setLoaderError] = useState<boolean>(false);

    const fetchData = useCallback(async () => {
        const data = await fetch('http://localhost:8081/retrieveUsers');
        if(data.ok) {
            const response = await data.json();
            console.log(response);
            setUsers(adaptUsers(response.users));
        } else {
            console.log('error in loading users');
            setLoaderError(true);
        }

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
        <Box sx={{width: '100%', maxWidth: 360, overflow: 'hidden', border: '1px dashed grey'}}>
                {
                users.length > 0 ? users.map((user, index) => (
                    <ListItem
                        key={user.name}
                        data-testid={'user-item-'+`${index}`}
                        secondaryAction={
                            <IconButton aria-label="comment" onClick={() => handleComment(user.name)}>
                                <CommentIcon/>
                            </IconButton>}
                    >
                        <ListItemText>
                            {user.name} - {user.surname} - {user.data.profile}
                        </ListItemText>
                    </ListItem>
                    )) : <LoaderUsers data-testid={'loader'} error={loaderError}/>
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
            <Divider />
            <Button variant="outlined" color="secondary" data-testid={'undo-button'} onClick={onUndo}>UNDO</Button>
        </Box>
    );
}