import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useUserConfiguration} from "./CustomerConfiguration";
import {
    Alert,
    AlertTitle,
    Button,
    Checkbox,
    FormControlLabel, InputLabel, MenuItem,
    Select, SelectChangeEvent,
    Snackbar,
    TextField,
    Typography
} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";
import {RemoteUser} from "./Data";
import Stack from '@mui/material/Stack';
import {LoaderUsers} from "./LoaderUsers";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {RestClient} from "./RestClient";
import {ChuckNorrisJoke} from "./ChuckNorrisJoke";
import { useRestClientConfiguration } from "./RestClientConfiguration";

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
    onSubmit: (text: string, age: number, checked: boolean) => void;
}

export const ShowCustomerData: React.FC<Props> = ({onSubmit}) => {
    const {name, surname} = useUserConfiguration();
    const [text, setText] = useState<string>('');
    const [age, setAge] = useState<string>();
    const [checked, setChecked] = useState(false);
    const [remoteUser, setRemoteUser] = useState<RemoteUser>();
    const [validInput, setValidInput] = useState(true);
    const [success, setSuccess] = useState(false);
    const restClient = useRestClientConfiguration();

    const fetchData = async () => {
        const response: RemoteUser = await restClient.get<RemoteUser>('/find?name=Sergio');
        console.log(response);
        setRemoteUser(response)
    };

    useEffect(() => {
        fetchData()
    }, []);

    const submit = (text: string, checked: boolean) => {
        setValidInput(true);
        if (text.length >= 0 && text.length < 3 || age === undefined) {
            setValidInput(false);
        } else {
            setSuccess(true);
            onSubmit(text, parseInt(age), checked);
        }
    }

    const handleAgeChange = (event: SelectChangeEvent) => {
        setAge(event.target.value)
    }

    return (
        <Stack spacing={1} sx={{width: 600}} data-testid={'stack'}>
            <Title data-testid="title">AppFlow</Title>
            <div>
                {remoteUser == undefined ?
                    <LoaderUsers error={false}/> :
                    <Typography variant="body1" data-testid={'username'} gutterBottom>Hi {remoteUser?.name} {remoteUser?.surname}</Typography>}
            </div>

            <TextField id="filled-basic" data-testid={'text'} label="Your alias" variant="outlined"
                       onChange={(e) => setText(e.target.value)}/>
            <Select
                value={age}
                label="Age"
                onChange={handleAgeChange}
                data-testid={'age-selector'}
            >
                {
                    Array(90).fill(90).map((_, value) => {
                        return <MenuItem value={value}>{value}</MenuItem>
                    })
                }
            </Select>
            <FormControlLabel
                control={<Checkbox data-testid={'checkbox'} checked={checked}
                                   onChange={(e) => setChecked(e.target.checked)}/>} label="Accept t&c"/>
            <Button variant="contained" color="success" endIcon={<NavigateNextIcon/>} data-testid={'submit-button'}
                    onClick={() => submit(text, checked)} disabled={!checked}>Next</Button>

            <ChuckNorrisJoke/>

            <UploadContainer>
                <Button color="primary" aria-label="upload picture" component="label" endIcon={<PhotoCamera/>}>
                    Upload your picture
                    <input hidden accept="image/*" type="file"/>
                </Button>
            </UploadContainer>
            {
                !validInput &&
                <Alert severity="warning" data-testid={'alert'}>
                    <AlertTitle>Warning</AlertTitle>
                    Input must be greater than 2 letters
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