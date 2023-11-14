import {RemoteUser} from "../Data";
import {useEffect, useState} from "react";
import {retrieveSingleCustomerRestService, RetrieveSingleCustomerService} from "../services/RetrieveCustomersService";

interface UserPanelStore {
    states: {
        remoteUser: RemoteUser | undefined;
        loadError: boolean;
    }
}

export const useUserPanelStore = (retrieveSingleCustomerService: RetrieveSingleCustomerService): UserPanelStore => {
    const [remoteUser, setRemoteUser] = useState<RemoteUser>();
    const [loadError, setLoadError] = useState<boolean>(false);

    useEffect(() => {
        retrieveSingleCustomerService('Davide')
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