import React, { ReactNode } from 'react';
import RestClient from './RestClient'

const RestClientContext = React.createContext<RestClient>(new RestClient());

export const RestClientConfiguration: React.FC<{ children: ReactNode }> = ({ children }) => {
    const restClient = new RestClient();

    return (
        <RestClientContext.Provider value={restClient}>
            {children}
        </RestClientContext.Provider>
    )
}

export default RestClientConfiguration;

export const useRestClient = () => React.useContext(RestClientContext);