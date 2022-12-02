import React, {ReactNode} from "react";

export interface User {
    name: string;
    surname: string;
}

const UserContext = React.createContext<User>({name: "", surname: ""});

export const UserConfiguration: React.FC<{ children: ReactNode }> = ({children}) => {
    const user = retrieveUser();

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

const retrieveUser = (): User => ({name: "Davide", surname: "Botti"})

export const useUserConfiguration = () => React.useContext(UserContext);