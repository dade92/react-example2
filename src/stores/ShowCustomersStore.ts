import {RemoteUser} from "../Data";
import {useEffect, useState} from "react";
import {retrieveCustomersRestService} from "../services/RetrieveCustomersService";
import {Action} from "../ShowCustomers";

interface ShowCustomerStore {
    states: {
        users: RemoteUser[];
        loaderError: boolean;
    },
    effects: {
        handleClick: (action: Action) => void;
        handleComment: (userName: string) => void;
    }
}

export const useShowCustomersStore = (): ShowCustomerStore => {
    const [users, setUsers] = useState<RemoteUser[]>([]);
    const [loaderError, setLoaderError] = useState<boolean>(false);

    useEffect(() => {
        retrieveCustomersRestService()
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
    }, [])

    const handleComment = (userName: string) => {
        console.log(userName);
    }

    const handleClick = (action: Action) => {
        console.log(action);
    }

    return {
        states: {
            users: users,
            loaderError: loaderError
        },
        effects: {
            handleClick,
            handleComment
        }
    }

}