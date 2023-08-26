import {useReducer, useState} from "react";
import {initialState, reducer, State} from "../utils/Reducer";
import {createCustomerRestService} from "../services/CreateCustomerService";

interface AppFlowStore {
    states: {
        username: string;
        state: State
    }
    effects: {
        onModalConfirm: () => void;
        setUsername: (name: string) => void;
        onshowCustomerData: (name: string, checked: boolean) => void;
        undoShowCustomers: () => void;
        onshowCustomersSubmit: () => void;
        onModalClose: () => void;
        onThankyouRestart: () => void;
        onTryAgain: () => void;
    }
}

export const useAppFlowStore = (): AppFlowStore => {
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

    const createCustomer = () => {
        dispatch({
            type: 'LOADING'
        });
        createCustomerRestService(username)
            .then((response) => {
                onCreateCustomerSuccess(response.code);
            })
            .catch(() => {
                onCreateCustomerFailure();
            })
    }
    
    const onshowCustomerData = (name: string, checked: boolean) => {
        setUsername(name);
        dispatch({
            type: 'SHOW_CUSTOMERS',
            customerName: name,
            isModalOpen: false,
            consent: checked,
        });
    }
    
    const undoShowCustomers = () => {
        dispatch({type: 'SHOW_CUSTOMER_DATA', username: username, consent: true})
    }

    //TODO consent here?
    const onshowCustomersSubmit = () => {
        dispatch({
            type: 'SHOW_CUSTOMERS',
            customerName: username,
            isModalOpen: true,
            consent: true,
        });
    }

    const onModalClose = () => {
        dispatch({
            type: 'SHOW_CUSTOMERS',
            customerName: username,
            isModalOpen: false,
            consent: true
        });
    }

    const onThankyouRestart = () => {
        dispatch({
            type: 'SHOW_CUSTOMER_DATA',
            username: '',
            consent: false,
        })
    }

    const onTryAgain = () => {
        dispatch({type: 'SHOW_CUSTOMER_DATA', username: '', consent: false})
    }

    return {
        states: {
            username,
            state
        },
        effects: {
            onModalConfirm: createCustomer,
            setUsername,
            onshowCustomerData,
            undoShowCustomers,
            onshowCustomersSubmit,
            onModalClose,
            onThankyouRestart,
            onTryAgain
        }
    }
}