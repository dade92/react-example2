export interface RemoteUser {
    name: string;
    surname: string;
    data: UserData
}

interface UserData {
    profile: string;
}