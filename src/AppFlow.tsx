import React, {useReducer, useState} from "react";
import {createCustomerRestService} from "./CreateCustomerRestService";
import {UserConfiguration} from "./CustomerConfiguration";
import {initialState, reducer, Status} from "./Reducer";
import {ShowCustomerData} from "./ShowCustomerData";
import {ShowCustomers} from "./ShowCustomers";
import {ThankYouPage} from "./ThankYouPage";
import {ErrorPage} from "./ErrorPage";
import {CustomLoader} from "./CustomLoader";
import {useRestClient} from "./RestClientConfiguration";
import styled from "styled-components";
import {useAppFlowStore} from "./stores/AppFlowStore";

const Wrapper = styled.div`
  display: flex;
  padding: 16px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const AppFlow: React.FC = () => {
    const {states, effects} = useAppFlowStore();

    return (
        <Wrapper>
            {states.state.status == Status.SHOW_CUSTOMER_DATA && <UserConfiguration>
                <ShowCustomerData
                    consent={states.state.consent} username={states.state.username}
                    onSubmit={(name: string, checked: boolean) => {
                        effects.showCustomerData(name, checked);
                    }}/>
            </UserConfiguration>
            }
            {states.state.status == Status.SHOW_CUSTOMERS &&
                <ShowCustomers
                    onUndo={() => {
                        effects.undoShowCustomers();
                    }}
                    onSubmit={() => {
                        effects.showCustomers();
                    }}
                    isModalOpen={states.state.isModalOpen}
                    onModalClose={effects.onModalClose}
                    onModalConfirm={effects.onModalConfirm}
                />
            }
            {states.state.status == Status.LOADING && <CustomLoader/>}
            {states.state.status == Status.THANK_YOU_PAGE &&
                <ThankYouPage customerName={states.state.customerName} onRestart={effects.onThankyouRestart}/>
            }
            {states.state.status == Status.ERROR && <ErrorPage onTryAgain={effects.onTryAgain}/>}
        </Wrapper>
    );
};