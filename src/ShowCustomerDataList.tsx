import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { RemoteUser } from "./ShowCustomerData";
import CommentIcon from '@mui/icons-material/Comment';

export const ShowCustomerDataList: React.FC = () => {
    const [users,setUsers] = useState<RemoteUser[]>([])

    const fetchData = useCallback(async () => {
        const data = await fetch('/retrieveUsers');
        const response = await data.json();
        console.log(response);
        setUsers(response.users);
      },[]);
    
    useEffect(()=> { fetchData() }, [fetchData])

    const handleComment = (userName: string) => {
        console.log(userName);
    }

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List>
                {users.map(user => {
                    return <ListItem 
                            key={user.name} 
                            secondaryAction={
                                <IconButton aria-label="comment" onClick={()=>handleComment(user.name)}>
                                    <CommentIcon />
                                </IconButton>}
                            >
                            <ListItemText>
                                {user.name} - {user.surname}
                            </ListItemText>
                    </ListItem>
                })}
            </List>
        </Box>
  );
}