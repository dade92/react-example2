import { Alert, AlertTitle, CircularProgress } from "@mui/material";
import { useReducer, useState } from "react";
import { createCustomer } from "./CreateCustomer";
import { UserConfiguration } from "./CustomerConfiguration";
import { MyModal } from "./MyModal";
import { initialState, reducer, Status } from "./Reducer";
import { ShowCustomerData } from "./ShowCustomerData";
import { ShowCustomerDataList } from "./ShowCustomerDataList";

export const AppFlow: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorAlert, setErrorAlert] = useState<boolean>(false);
    const [state, dispatch] = useReducer(reducer, initialState);
    let username = '';

    const onCreateCustomerSuccess = () => {
        setErrorAlert(false);
        setLoading(false);
        dispatch({
            type: 'SHOW_CUSTOMER_DATA_LIST'
        });
    };

    const onCreateCustomerFailure = () => {
        setErrorAlert(true);
        setLoading(false);
    };

    return (
        <>
            {state.status == Status.SHOW_CUSTOMER_DATA && <UserConfiguration>
                <ShowCustomerData onSubmit={(name: string, checked: boolean) => {
                    console.log(name + checked);
                    username = name;
                    setOpenModal(true);
                }} />
            </UserConfiguration>
            }
            {state.status == Status.SHOW_CUSTOMER_DATA_LIST && <ShowCustomerDataList onUndo={()=>{
                dispatch({type: 'SHOW_CUSTOMER_DATA'})
            }}/>}
            {
                openModal && <MyModal isOpen={openModal} onClose={() => setOpenModal(false)} onConfirm={
                    () => {
                        createCustomer(username, onCreateCustomerSuccess, onCreateCustomerFailure);
                        setOpenModal(false);
                        setLoading(true);
                    }
                } />
            }
            {loading && <CircularProgress />}
            {
                errorAlert && <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Something went wrong. Try again
                </Alert>
            }
        </>
    );
};