export enum Status {
    SHOW_CUSTOMER_DATA,
    SHOW_CUSTOMERS,
    LOADING,
    THANK_YOU_PAGE,
    ERROR
}

type ShowCustomerDataState = {
    status: Status.SHOW_CUSTOMER_DATA;
}

type ShowCustomersState = {
    status: Status.SHOW_CUSTOMERS;
    customerName: string;
    isModalOpen: boolean;
}

type LoadingState = {
    status: Status.LOADING;
}

type ThankYouPageState = {
    status: Status.THANK_YOU_PAGE;
    customerName: string;
}

type ErrorState = {
    status: Status.ERROR
}

type State = ShowCustomerDataState | ShowCustomersState | LoadingState | ThankYouPageState | ErrorState;

type ShowCustomersAction = {
    type: 'SHOW_CUSTOMERS';
    customerName: string;
    isModalOpen: boolean;
}

type ShowCustomerDataAction = {
    type: 'SHOW_CUSTOMER_DATA'
}

type LoadingAction = {
    type: 'LOADING'
}

type ThankYouPageAction = {
    type: 'THANK_YOU_PAGE'
    customerName: string;
}

type ErrorAction = {
    type: 'ERROR'
}

type Action = ShowCustomerDataAction | ShowCustomersAction | LoadingAction | ThankYouPageAction | ErrorAction;

export const initialState: State = {
    status: Status.SHOW_CUSTOMER_DATA
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SHOW_CUSTOMERS':
            return {
                status: Status.SHOW_CUSTOMERS,
                customerName: action.customerName,
                isModalOpen: action.isModalOpen
            }
        case 'SHOW_CUSTOMER_DATA':
            return {
                status: Status.SHOW_CUSTOMER_DATA
            }
        case 'LOADING':
            return {
                status: Status.LOADING
            }
        case 'THANK_YOU_PAGE':
            return {
                status: Status.THANK_YOU_PAGE,
                customerName: action.customerName
            }
        case 'ERROR':
            return {
                status: Status.ERROR
            }
    }
};