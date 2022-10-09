import { Box, List, ListItem } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { RemoteUser } from "./ShowCustomerData";

export const ShowCustomerDataList: React.FC = () => {
    const [users,setUsers] = useState<RemoteUser[]>([])

    const fetchData = useCallback(async () => {
        const data = await fetch('/retrieveUsers');
        const response = await data.json();
        console.log(response);
        setUsers(response.users);
      },[]);
    
      useEffect(()=> { fetchData() }, [fetchData])

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List>
                {users.map(user => {
                    return <ListItem>
                        {user.name} - {user.surname}
                    </ListItem>
                })}
            </List>
        </Box>
  );
}