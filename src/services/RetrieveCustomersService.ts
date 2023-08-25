import {RemoteUserResponse} from "../RemoteUserResponseAdapter";
import {staticRestClient} from "../RestClient";

export type RetrieveCustomersService = () => Promise<RemoteUserResponse>;

export const retrieveCustomersRestService: RetrieveCustomersService = () =>
    staticRestClient.get<RemoteUserResponse>('/retrieveUsers')