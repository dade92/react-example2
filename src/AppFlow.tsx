import { Alert, AlertTitle, CircularProgress } from "@mui/material";
import { useState } from "react";
import { createCustomer } from "./CreateCustomer";
import { UserConfiguration } from "./CustomerConfiguration";
import { MyModal } from "./MyModal";
import { ShowCustomerData } from "./ShowCustomerData";
import { ShowCustomerDataList } from "./ShowCustomerDataList";

export const AppFlow: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorAlert, setErrorAlert] = useState<boolean>(false);
    let username = '';

    const onCreateCustomerSuccess = () => {
        setErrorAlert(false);
        setLoading(false);
    };

    const onCreateCustomerFailure = () => {
        setErrorAlert(true);
        setLoading(false);
    };

    return (
        <>
            <UserConfiguration>
                <ShowCustomerData onSubmit={(name: string, checked: boolean) => {
                    console.log(name + checked);
                    username = name;
                    setOpenModal(true);
                }} />
            </UserConfiguration>
            <ShowCustomerDataList />
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