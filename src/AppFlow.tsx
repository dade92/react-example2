import React, {useReducer, useState} from "react";
import {createCustomer} from "./CreateCustomer";
import {UserConfiguration} from "./CustomerConfiguration";
import {initialState, reducer, Status} from "./Reducer";
import {ShowCustomerData} from "./ShowCustomerData";
import {ShowCustomerDataList} from "./ShowCustomerDataList";
import {ThankYouPage} from "./ThankYouPage";
import {ErrorPage} from "./ErrorPage";
import {CustomLoader} from "./CustomLoader";

export const AppFlow: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [username, setUsername] = useState<string>('');

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
                <ShowCustomerData onSubmit={(name: string, checked: boolean) => {
                    console.log(name + checked);
                    setUsername(name);
                    dispatch({
                        type: 'SHOW_CUSTOMER_DATA_LIST',
                        customerName: name,
                        isModalOpen: false
                    });
                }}/>
            </UserConfiguration>
            }
            {state.status == Status.SHOW_CUSTOMER_DATA_LIST && <ShowCustomerDataList onUndo={() => {
                dispatch({type: 'SHOW_CUSTOMER_DATA'})
            }} onSubmit={() => {
                dispatch({
                    type: 'SHOW_CUSTOMER_DATA_LIST',
                    customerName: username,
                    isModalOpen: true
                });
            }} isModalOpen={state.isModalOpen} onModalClose={() => dispatch({
                type: 'SHOW_CUSTOMER_DATA_LIST',
                customerName: username,
                isModalOpen: false
            })} onModalConfirm={() => {
                createCustomer(username, onCreateCustomerSuccess, onCreateCustomerFailure);
                dispatch({
                    type: 'LOADING'
                })
            }
            }/>}
            {state.status == Status.LOADING && <CustomLoader/>}
            {state.status == Status.THANK_YOU_PAGE && <ThankYouPage customerName={state.customerName} onRestart={() => {
                dispatch({
                    type: 'SHOW_CUSTOMER_DATA'
                })
            }}/>}
            {state.status == Status.ERROR && <ErrorPage onTryAgain={() => {
                dispatch({type: 'SHOW_CUSTOMER_DATA'})
            }}/>}
        </>
    );
};