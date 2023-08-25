import {RemoteUserResponse} from "../RemoteUserResponseAdapter";
import {staticRestClient} from "../RestClient";
import {RemoteUser} from "../Data";

export type RetrieveCustomersService = () => Promise<RemoteUserResponse>;
export type RetrieveSingleCustomerService = (username: string) => Promise<RemoteUser>;

export const retrieveCustomersRestService: RetrieveCustomersService = () =>
    staticRestClient.get<RemoteUserResponse>('/retrieveUsers')

export const retrieveSingleCustomerRestService: RetrieveSingleCustomerService = (username: string) =>
    staticRestClient.get<RemoteUser>('/find?name=Davide')