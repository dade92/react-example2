import {ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import {Action} from "./ShowCustomers";

interface Props {
    handleClick: (action: Action) => void;
}

export const Actions: React.FC<Props> = ({handleClick}) =>
    (
        <>
            <ListItem disablePadding data-testid={'inbox-item'}>
                <ListItemButton onClick={() => handleClick(Action.INBOX)}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Inbox"/>
                </ListItemButton>
            </ListItem><ListItem disablePadding data-testid={'drafts-item'}>
            <ListItemButton onClick={() => handleClick(Action.DRAFTS)}>
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <ListItemText primary="Drafts"/>
            </ListItemButton>
        </ListItem>
        </>
    )