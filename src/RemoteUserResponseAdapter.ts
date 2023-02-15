import {RemoteUser} from "./Data"

export interface RemoteUserResponse {
    name: string;
    surname: string;
    data: UserDataResponse;
}

interface UserDataResponse {
    profile: string;
}

const adaptToDomain = (remoteUserResponse: RemoteUserResponse): RemoteUser => ({
        name: remoteUserResponse.name,
        surname: null,
        data: null
    })

export const adaptUsers = (remoteUsers: RemoteUserResponse[]): RemoteUser[] => {
    return remoteUsers.map(ru => adaptToDomain(ru));
}