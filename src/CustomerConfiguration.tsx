import React, { ReactNode } from "react";

export interface User {
    name: string;
    surname: string;
}

interface Props {
    children: ReactNode
}

const UserContext = React.createContext<User>({name: "", surname: ""});

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
        name: "Davide",
        surname: "Botti"
    } 
}

export const useUserConfiguration = () => React.useContext(UserContext); 