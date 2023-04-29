import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useUserConfiguration} from "./CustomerConfiguration";
import {Alert, AlertTitle, Button, Checkbox, FormControlLabel, Snackbar, TextField, Typography} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";
import {RemoteUser} from "./Data";
import Stack from '@mui/material/Stack';
import {LoaderUsers} from "./LoaderUsers";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRestClient } from "./RestClientConfiguration";
import { useTranslations } from "./TranslationsConfiguration";

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
}

const HI_KEY = 'appflow.customerData.hi';

export const ShowCustomerData: React.FC<Props> = ({onSubmit}) => {
    const {name, surname} = useUserConfiguration();
    const { translationRepository } = useTranslations();
    const [text, setText] = useState<string>('');
    const [checked, setChecked] = useState(false);
    const [remoteUser, setRemoteUser] = useState<RemoteUser>();
    const [loadError, setLoadError] = useState<boolean>(false);
    const [validInput, setValidInput] = useState(true);
    const [success, setSuccess] = useState(false);
    const restClient = useRestClient();

    const fetchData = async () => {
        restClient.get<RemoteUser>('/find?name=Davide')
        .then((response)=> {
            setRemoteUser(response);
        })
        .catch((e)=> {
            setLoadError(true);
        });
    };

    useEffect(() => {
        fetchData()
    }, []);

    const submit = (text: string, checked: boolean) => {
        setValidInput(true);
        if (text.length >= 0 && text.length < 3) {
            setValidInput(false);
        } else {
            setSuccess(true);
            onSubmit(text, checked);
        }
    }

    return (
        <Stack spacing={1} sx={{width: 600}} data-testid={'stack'}>
            <Title data-testid="title">AppFlow</Title>
            <div>
                {remoteUser == undefined ?
                    <LoaderUsers error={loadError}/> :
                    <Typography variant="body1" data-testid={'username'} gutterBottom>{translationRepository(HI_KEY)} {remoteUser?.name} {remoteUser?.surname}</Typography>}
            </div>

            <TextField id="filled-basic" data-testid={'text'} label={translationRepository('appflow.customerData.alias')} variant="outlined"
                       onChange={(e) => setText(e.target.value)}/>
            <FormControlLabel
                control={<Checkbox data-testid={'checkbox'} checked={checked}
                                   onChange={(e) => setChecked(e.target.checked)}/>} label={translationRepository('appflow.customerData.t_and_c')}/>
            <Button variant="contained" color="success" endIcon={<NavigateNextIcon/>} data-testid={'submit-button'}
                    onClick={() => submit(text, checked)} disabled={!checked}>Next</Button>

            <UploadContainer>
                <Button color="primary" aria-label="upload picture" component="label" endIcon={<PhotoCamera/>}>
                    {translationRepository('appflow.customerData.photo')}
                    <input hidden accept="image/*" type="file"/>
                </Button>
            </UploadContainer>
            {
                !validInput &&
                <Alert severity="warning" data-testid={'alert'}>
                    <AlertTitle>Warning</AlertTitle>
                    {translationRepository('appflow.customerData.alertmessage')}
                </Alert>
            }
            {
                <Snackbar open={success} autoHideDuration={2000} data-testid={'snackbar'}
                          onClose={() => setSuccess(false)}>
                    <Alert severity="success" sx={{width: '100%'}}>
                        Data inserted correctly!
                    </Alert>
                </Snackbar>

            }
        </Stack>
    )

}