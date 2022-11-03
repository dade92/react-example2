export enum Status {
    SHOW_CUSTOMER_DATA,
    SHOW_CUSTOMER_DATA_LIST,
    LOADING,
    THANK_YOU_PAGE,
    ERROR
}

type ShowCustomerDataState = {
    status: Status.SHOW_CUSTOMER_DATA;
}

type ShowCustomerDataListState = {
    status: Status.SHOW_CUSTOMER_DATA_LIST;
    customerName: string;
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

type State = ShowCustomerDataState | ShowCustomerDataListState | LoadingState | ThankYouPageState | ErrorState;

type ShowCustomerDataListAction = {
    type: 'SHOW_CUSTOMER_DATA_LIST';
    customerName: string;
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

type Action = ShowCustomerDataAction | ShowCustomerDataListAction | LoadingAction | ThankYouPageAction | ErrorAction;

export const initialState: State = {
    status: Status.SHOW_CUSTOMER_DATA
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SHOW_CUSTOMER_DATA_LIST':
            return {
                status: Status.SHOW_CUSTOMER_DATA_LIST,
                customerName: action.customerName
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