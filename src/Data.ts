export interface RemoteUser {
    name: string;
    surname: string | null;
    data: UserData | null;
}

interface UserData {
    profile: string;
}