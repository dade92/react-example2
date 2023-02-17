import {RemoteUser} from "./Data"

export interface RemoteUserResponse {
    users: RemoteUser[];
}

interface UserDataResponse {
    profile: string;
}

const adaptToDomain = (remoteUserResponse: RemoteUser): RemoteUser => ({
        name: remoteUserResponse.name,
        surname: null,
        data: null
    })

export const adaptUsers = (remoteUsers: RemoteUserResponse): RemoteUser[] => {
    return remoteUsers.users.map(ru => adaptToDomain(ru));
}