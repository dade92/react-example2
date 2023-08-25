import {RemoteUser} from "../Data";
import {useEffect, useState} from "react";
import {retrieveSingleCustomerRestService} from "../services/RetrieveCustomersService";

interface UserPanelStore {
    states: {
        remoteUser: RemoteUser | undefined;
        loadError: boolean;
    }
}

export const useUserPanelStore = (): UserPanelStore => {
    const [remoteUser, setRemoteUser] = useState<RemoteUser>();
    const [loadError, setLoadError] = useState<boolean>(false);

    useEffect(() => {
        retrieveSingleCustomerRestService('Davide')
            .then((response)=> {
                setRemoteUser(response);
            })
            .catch((e)=> {
                setLoadError(true);
            });
    }, []);

    return {
        states: {
            remoteUser,
            loadError
        }
    }
}