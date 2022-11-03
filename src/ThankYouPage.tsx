import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {CenterWrapper} from "./CenterWrapper";
import {Button} from "@mui/material";
import React from "react";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

interface Props {
    customerName: string;
    onRestart: () => void;
}

export const ThankYouPage: React.FC<Props> = ({customerName, onRestart}) => {
    return (
        <CenterWrapper>
            <ThumbUpIcon data-testid='thumbs-up'/>
            <span data-testid='thankyou-message'>Thanks for your selection {customerName}!</span>
            <Button variant="contained" color="success" startIcon={<RestartAltIcon/>} data-testid={'restart-button'}
                    onClick={onRestart}>Restart</Button>
        </CenterWrapper>
    )
}