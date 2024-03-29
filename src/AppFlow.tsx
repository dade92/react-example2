import React from "react";
import {Status} from "./utils/Reducer";
import {ShowCustomerData} from "./ShowCustomerData";
import {ShowCustomers} from "./ShowCustomers";
import {ThankYouPage} from "./ThankYouPage";
import {ErrorPage} from "./ErrorPage";
import styled from "styled-components";
import {useAppFlowStore} from "./stores/AppFlowStore";
import { LoaderPage } from "./LoaderPage";

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
            {states.state.status == Status.LOADING && <LoaderPage/>}
            {states.state.status == Status.SHOW_CUSTOMER_DATA &&
                <ShowCustomerData
                    consent={states.state.consent} username={states.state.username}
                    onSubmit={(name: string, checked: boolean) => {
                        effects.onshowCustomerData(name, checked);
                    }}/>
            }
            {states.state.status == Status.SHOW_CUSTOMERS &&
                <ShowCustomers
                    onUndo={() => {
                        effects.undoShowCustomers();
                    }}
                    onSubmit={() => {
                        effects.onshowCustomersSubmit();
                    }}
                    isModalOpen={states.state.isModalOpen}
                    onModalClose={effects.onModalClose}
                    onModalConfirm={effects.onModalConfirm}
                />
            }
            {states.state.status == Status.THANK_YOU_PAGE &&
                <ThankYouPage customerName={states.state.customerName} onRestart={effects.onThankyouRestart}/>
            }
            {states.state.status == Status.ERROR && <ErrorPage onTryAgain={effects.onTryAgain}/>}
        </Wrapper>
    );
};