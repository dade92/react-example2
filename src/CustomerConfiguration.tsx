import React, { ReactNode } from "react";

export interface User {
    name: string;
}

interface Props {
    children: ReactNode
}

const defaultUser = {
    name: ""
}

const UserContext = React.createContext<User>(defaultUser);

export const UserConfiguration: React.FC<Props> = ({children}) => {
    const user = retrieveUser();

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

const retrieveUser = () => {
    return {
        name: "Davide"
    } 
}

export const useUserConfiguration = () => React.useContext(UserContext); 