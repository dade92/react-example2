import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton} from "@mui/material";
import React, {FC} from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useTranslations } from "./TranslationsConfiguration";

interface Props {
    isOpen: boolean;
    onConfirm: () => void;
    onClose: () => void;
}

export const ConfirmationModal: FC<Props> = ({isOpen, onClose, onConfirm}) => {
    const { translationRepository } = useTranslations();
    
    return (
        <Dialog
            style={{color: 'black'}}
            open={isOpen}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            data-testid={'confirm-dialog'}>
            <DialogTitle data-testid={'title'} id="alert-dialog-title">
                {translationRepository('appflow.customerData.areyousure')}
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
                    {translationRepository('appflow.customerData.confirmModal')}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button data-testid={'close-button'} onClick={onClose}>{translationRepository('appflow.customerData.disagree')}</Button>
                <Button data-testid={'confirm-button'} onClick={onConfirm} autoFocus>
                    {translationRepository('appflow.customerData.confirm')}
                </Button>
            </DialogActions>
        </Dialog>
    )
}