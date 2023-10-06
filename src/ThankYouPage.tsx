import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {CenterWrapper} from "./CenterWrapper";
import {Button} from "@mui/material";
import React from "react";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {useTranslations} from './TranslationsConfiguration';

interface Props {
    customerName: string;
    onRestart: () => void;
}

export const ThankYouPage: React.FC<Props> = ({customerName, onRestart}) => {
    const {translationRepository} = useTranslations();

    return (
        <CenterWrapper>
            <ThumbUpIcon data-testid='thumbs-up'/>
            <span
                data-testid='thankyou-message'>{translationRepository('appflow.customerData.thankyoumessage')} {customerName}!</span>
            <Button variant="contained" color="success" startIcon={<RestartAltIcon/>} data-testid={'restart-button'}
                    onClick={onRestart}>{translationRepository('appflow.customerData.restart')}</Button>
        </CenterWrapper>
    )
}