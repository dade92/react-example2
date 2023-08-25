import {RemoteUser} from "../Data";
import {useState} from "react";
import {useRestClient} from "../RestClientConfiguration";
import {RemoteUserResponse} from "../RemoteUserResponseAdapter";
import {staticRestClient} from "../RestClient";

export interface ShowCustomerStore {
    states: {
        users: RemoteUser[];
        loaderError: boolean;
    },
    effects: {
        fetchData: () => void;
    }
}

export const useShowCustomersStore = (): ShowCustomerStore => {
    const [users, setUsers] = useState<RemoteUser[]>([]);
    const [loaderError, setLoaderError] = useState<boolean>(false);

    const fetchData = () => {
        staticRestClient.get<RemoteUserResponse>('/retrieveUsers')
            .then(r => {
                setUsers(r.users);
                if(r.users.length === 0) {
                    setLoaderError(true);
                }
            })
            .catch(error => {
                console.log('error in loading users');
                setLoaderError(true);
            })
    }

    return {
        states: {
            users: users,
            loaderError: loaderError
        },
        effects: {
            fetchData
        }
    }

}