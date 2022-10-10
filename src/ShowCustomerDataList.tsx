import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { RemoteUser } from "./Data";
import CommentIcon from '@mui/icons-material/Comment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { adaptUsers } from "./RemoteUserResponseAdapter";

enum Action {
    INBOX = "INBOX",
    DRAFTS = "DRAFTS"
}

export const ShowCustomerDataList: React.FC = () => {
    const [users,setUsers] = useState<RemoteUser[]>([])

    const fetchData = useCallback(async () => {
        const data = await fetch('http://localhost:8081/retrieveUsers');
        const response = await data.json();
        console.log(response);
        setUsers(adaptUsers(response.users));
      },[]);
    
    useEffect(()=> { fetchData() }, [fetchData])

    const handleComment = (userName: string) => {
        console.log(userName);
    }

    const handleClick = (action: Action) => {
        console.log(action);
    }

    return (
        <Box sx={{ width: '100%', maxWidth: 360, overflow: 'hidden', border: '1px dashed grey' }}>
            <List>
                {users.map(user => {
                    return <ListItem 
                            key={user.name} 
                            divider={true}
                            secondaryAction={
                                <IconButton aria-label="comment" onClick={()=>handleComment(user.name)}>
                                    <CommentIcon />
                                </IconButton>}
                            >
                            <ListItemText>
                                {user.name} - {user.surname} - {user.data.profile}
                            </ListItemText>
                    </ListItem>
                })}
            </List>
            <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>handleClick(Action.INBOX)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>handleClick(Action.DRAFTS)}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
  );
}