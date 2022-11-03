import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton} from "@mui/material";
import React, {FC} from "react";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    isOpen: boolean;
    onConfirm: () => void;
    onClose: () => void;
}

export const MyModal: FC<Props> = ({isOpen, onClose, onConfirm}) => {
    return (
        <Dialog
            style={{color: 'black'}}
            open={isOpen}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle data-testid={'title'} id="alert-dialog-title">
                {"Are you sure?"}
                {
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}>
                        <CloseIcon/>
                    </IconButton>
                }
            </DialogTitle>
            <DialogContent dividers>
                <DialogContentText data-testid={'content'} id="alert-dialog-description">
                    By clicking on confirm you confirm the operation
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button data-testid={'close-button'} onClick={onClose}>Disagree</Button>
                <Button data-testid={'confirm-button'} onClick={onConfirm} autoFocus>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}