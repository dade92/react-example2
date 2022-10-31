export enum Status {
    SHOW_CUSTOMER_DATA,
    SHOW_CUSTOMER_DATA_LIST,
}

interface State {
    status: Status;
}


type ShowCustomerDataListAction = {
    type: 'SHOW_CUSTOMER_DATA_LIST'
}

type ShowCustomerDataAction = {
    type: 'SHOW_CUSTOMER_DATA'
}

type Action = ShowCustomerDataAction | ShowCustomerDataListAction;

export const initialState: State = {
    status: Status.SHOW_CUSTOMER_DATA
};

export const reducer = (state: State, action: Action): State => {
    switch(action.type) {
        case 'SHOW_CUSTOMER_DATA_LIST':
            return {
                status: Status.SHOW_CUSTOMER_DATA_LIST
            }
        case 'SHOW_CUSTOMER_DATA':
            return {
                status: Status.SHOW_CUSTOMER_DATA
            }
    }
};