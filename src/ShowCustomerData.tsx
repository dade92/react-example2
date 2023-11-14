import React from "react";
import styled from "styled-components";
import {Alert, AlertTitle, Button, Checkbox, FormControlLabel, Snackbar, TextField} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useTranslations} from "./TranslationsConfiguration";
import {UserPanel} from "./UserPanel";
import {StackContainer} from "./StackContainer";
import {useCustomerDataStore} from "./stores/CustomerDataStore";
import {retrieveSingleCustomerRestService} from "./services/RetrieveCustomersService";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

interface Props {
    onSubmit: (text: string, checked: boolean) => void;
    username: string;
    consent: boolean;
}

export const ShowCustomerData: React.FC<Props> = ({onSubmit, username, consent}) => {
    const {states, effects} = useCustomerDataStore(username, consent, onSubmit);
    const {translationRepository} = useTranslations();

    return (
        <StackContainer data-testid='wrapper'>
            <Title data-testid="title">AppFlow</Title>

            <UserPanel retrieveSingleCustomerService={retrieveSingleCustomerRestService}/>

            <TextField defaultValue={states.text} id="filled-basic" data-testid={'text'}
                       label={translationRepository('appflow.customerData.alias')} variant="outlined"
                       onChange={(e) => effects.onTextFieldChange(e.target.value)}/>
            <FormControlLabel
                control={<Checkbox data-testid={'checkbox'}
                                   checked={states.checked}
                                   onChange={(e) => effects.onCheckboxSelected(e.target.checked)}/>}
                label={translationRepository('appflow.customerData.t_and_c')}/>

            <Button variant="contained" color="success" endIcon={<NavigateNextIcon/>} data-testid={'submit-button'}
                    onClick={() => effects.onConfirm()}
                    disabled={!states.checked}>{translationRepository('appflow.customerData.next')}</Button>

            <UploadContainer>
                <Button color="primary" aria-label="upload picture" component="label" endIcon={<PhotoCamera/>}>
                    {translationRepository('appflow.customerData.photo')}
                    <input hidden accept="image/*" type="file"/>
                </Button>
            </UploadContainer>
            {
                !states.validInput &&
                <Alert severity="warning" data-testid={'alert'}>
                    <AlertTitle>{translationRepository('appflow.customerData.warning')}</AlertTitle>
                    {translationRepository('appflow.customerData.alertmessage')}
                </Alert>
            }
            {
                <Snackbar open={states.success} autoHideDuration={2000} data-testid={'snackbar'}
                          onClose={() => effects.setSuccess(false)}>
                    <Alert severity="success" sx={{width: '100%'}}>
                        Data inserted correctly!
                    </Alert>
                </Snackbar>
            }
        </StackContainer>
    )
}