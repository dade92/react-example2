import {RestClient} from "./RestClient";


interface CreateCustomerResponse {
    code: string;
}

export type CreateCustomerService = (
    restClient: RestClient,
    name: string,
) => Promise<CreateCustomerResponse>;

export const createCustomerRestService: CreateCustomerService = async (restClient: RestClient, name: string) =>
    restClient.post(
        '/insert',
        {
            name,
            age: 30,
            favouriteDestinations: {
                destinations: [
                    {
                        city: "Milan"
                    },
                    {
                        city: "Erba"
                    }
                ]
            }
        }
    )