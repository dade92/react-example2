import { RemoteUser } from "./Data"

export interface RemoteUserResponse {
    name: string;
    surname: string;
    data: UserDataResponse;
}

interface UserDataResponse {
    profile: string;
}

const adaptToDomain = (remoteUserResponse: RemoteUserResponse): RemoteUser => {
    return {
        name: remoteUserResponse.name,
        surname: remoteUserResponse.surname,
        data: {
            profile: remoteUserResponse.data.profile
        }
    }
}

export const adaptUsers = (remoteUsers: RemoteUserResponse[]): RemoteUser[] => {
    return remoteUsers.map(ru => adaptToDomain(ru));
}