import React, {useReducer, useState} from "react";
import {createCustomer} from "./CreateCustomer";
import {UserConfiguration} from "./CustomerConfiguration";
import {initialState, reducer, Status} from "./Reducer";
import {ShowCustomerData} from "./ShowCustomerData";
import {ShowCustomers} from "./ShowCustomers";
import {ThankYouPage} from "./ThankYouPage";
import {ErrorPage} from "./ErrorPage";
import {CustomLoader} from "./CustomLoader";
import {useRestClient} from "./RestClientConfiguration";

export const AppFlow: React.FC = () => {
    const restClient = useRestClient();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [username, setUsername] = useState<string>("");

    const onCreateCustomerSuccess = (customerName: string) => {
        dispatch({
            type: 'THANK_YOU_PAGE',
            customerName: customerName
        });
    };

    const onCreateCustomerFailure = () => {
        dispatch({
            type: 'ERROR'
        });
    };

    return (
        <>
            {state.status == Status.SHOW_CUSTOMER_DATA && <UserConfiguration>
                <ShowCustomerData consent={state.consent} username={state.username} onSubmit={(name: string, checked: boolean) => {
                    console.log(name + checked);
                    setUsername(name);
                    dispatch({
                        type: 'SHOW_CUSTOMERS',
                        customerName: name,
                        isModalOpen: false
                    });
                }}/>
            </UserConfiguration>
            }
            {state.status == Status.SHOW_CUSTOMERS &&
                <ShowCustomers
                    onUndo={() => {
                        dispatch({type: 'SHOW_CUSTOMER_DATA', username: username, consent: true})
                    }}
                    onSubmit={() => {
                        dispatch({type: 'SHOW_CUSTOMERS', customerName: username, isModalOpen: true});
                    }}
                    isModalOpen={state.isModalOpen}
                    onModalClose={() => dispatch({
                        type: 'SHOW_CUSTOMERS',
                        customerName: username,
                        isModalOpen: false
                    })}
                    onModalConfirm={() => {
                        createCustomer(restClient, username, onCreateCustomerSuccess, onCreateCustomerFailure);
                        dispatch({type: 'LOADING'})
                    }}
                />
            }
            {state.status == Status.LOADING && <CustomLoader/>}
            {state.status == Status.THANK_YOU_PAGE && <ThankYouPage customerName={state.customerName} onRestart={() => {
                dispatch({
                    type: 'SHOW_CUSTOMER_DATA',
                    username: '',
                    consent: false,
                })
            }}/>}
            {state.status == Status.ERROR && <ErrorPage onTryAgain={() => {
                dispatch({type: 'SHOW_CUSTOMER_DATA', username: '', consent: false})
            }}/>}
        </>
    );
};