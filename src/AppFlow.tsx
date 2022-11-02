import {Alert, AlertTitle, CircularProgress} from "@mui/material";
import {useReducer, useState} from "react";
import {createCustomer} from "./CreateCustomer";
import {UserConfiguration} from "./CustomerConfiguration";
import {MyModal} from "./MyModal";
import {initialState, reducer, Status} from "./Reducer";
import {ShowCustomerData} from "./ShowCustomerData";
import {ShowCustomerDataList} from "./ShowCustomerDataList";
import {ThankYouPage} from "./ThankYouPage";

export const AppFlow: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [errorAlert, setErrorAlert] = useState<boolean>(false);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [username, setUsername] = useState<string>('');

    const onCreateCustomerSuccess = (customerName: string) => {
        setErrorAlert(false);
        dispatch({
            type: 'SHOW_CUSTOMER_DATA_LIST',
            customerName: customerName
        });
    };

    const onCreateCustomerFailure = () => {
        setErrorAlert(true);
        dispatch({
            type: 'SHOW_CUSTOMER_DATA'
        });
    };

    return (
        <>
            {state.status == Status.SHOW_CUSTOMER_DATA && <UserConfiguration>
                <ShowCustomerData onSubmit={(name: string, checked: boolean) => {
                    console.log(name + checked);
                    setUsername(name);
                    setOpenModal(true);
                }}/>
            </UserConfiguration>
            }
            {state.status == Status.SHOW_CUSTOMER_DATA_LIST && <ShowCustomerDataList onUndo={() => {
                dispatch({type: 'SHOW_CUSTOMER_DATA'})
            }} onSubmit={() => {
                dispatch({type: 'THANK_YOU_PAGE', customerName: state.customerName})
            }}/>}
            {
                openModal && <MyModal isOpen={openModal} onClose={() => setOpenModal(false)} onConfirm={
                    () => {
                        createCustomer(username, onCreateCustomerSuccess, onCreateCustomerFailure);
                        setOpenModal(false);
                        setErrorAlert(false);
                        dispatch({
                            type: 'LOADING'
                        })
                    }
                }/>
            }
            {state.status == Status.LOADING && <CircularProgress/>}
            {state.status == Status.THANK_YOU_PAGE && <ThankYouPage customerName={state.customerName}/>}
            {
                errorAlert && <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Something went wrong. Try again
                </Alert>
            }
        </>
    );
};