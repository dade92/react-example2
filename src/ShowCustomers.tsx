import {Button, Divider, IconButton, ListItem, ListItemText} from "@mui/material";
import React from "react";
import CommentIcon from '@mui/icons-material/Comment';
import {LoaderUsers} from "./LoaderUsers";
import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {ConfirmationModal} from "./ConfirmationModal";
import {useTranslations} from "./TranslationsConfiguration";
import {StackContainer} from "./StackContainer";
import {Actions} from "./Actions";
import {MyCarousel} from "./Carousel";
import {useShowCustomersStore} from "./stores/ShowCustomersStore";

export enum Action {
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

export const ShowCustomers: React.FC<Props> = ({onUndo, onSubmit, onModalConfirm, onModalClose, isModalOpen}) => {
    const {states, effects} = useShowCustomersStore();
    const { translationRepository } = useTranslations();

    return (
        <>
            <StackContainer>
                {
                    states.users.length > 0 ? states.users.map((user, index) => {
                        return <ListItem
                            key={user.name}
                            data-testid={'user-item-' + `${index}`}
                            secondaryAction={
                                <IconButton aria-label="comment" onClick={() => effects.handleComment(user.name)}>
                                    <CommentIcon/>
                                </IconButton>}
                        >
                            <ListItemText>
                                {user.name} - {user.surname}
                            </ListItemText>
                        </ListItem>
                    }) : <LoaderUsers data-testid={'loader'} error={states.loaderError}/>
                }
                <Divider>{translationRepository('appflow.customerData.actions')}</Divider>

                <Actions handleClick={(action: Action) => effects.handleClick(action)}/>

                <Divider/>

                <MyCarousel/>
                <ButtonContainer>
                    <Button variant="outlined" color="secondary" data-testid={'undo-button'} onClick={onUndo}
                            startIcon={<ArrowBackIcon/>}>{translationRepository('appflow.customerData.undo')}</Button>
                    <Button variant="contained" color="success" data-testid={'submit-button'} onClick={() => {
                        onSubmit()
                    }}>{translationRepository('appflow.customerData.submit')}</Button>
                </ButtonContainer>
            </StackContainer>
            {
                isModalOpen && <ConfirmationModal isOpen={isModalOpen} onClose={onModalClose} onConfirm={onModalConfirm}/>
            }
        </>
    );
}