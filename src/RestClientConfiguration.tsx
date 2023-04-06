import React, {ReactNode} from 'react';
import RestClient from './RestClient'

let host = '';

if (process.env.REACT_APP_STAGE === 'production') {
    host = 'http://localhost:8080'
}


const RestClientContext = React.createContext<RestClient>(new RestClient(host));

export const RestClientConfiguration: React.FC<{ children: ReactNode }> = ({children}) => {
    const restClient = new RestClient(host);

    return (
        <RestClientContext.Provider value={restClient}>
            {children}
        </RestClientContext.Provider>
    )
}

export default RestClientConfiguration;

export const useRestClient = () => React.useContext(RestClientContext);