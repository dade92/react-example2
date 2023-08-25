import {staticRestClient} from "../RestClient";

interface CreateCustomerResponse {
    code: string;
}

export type CreateCustomerService = (
    name: string,
) => Promise<CreateCustomerResponse>;

export const createCustomerRestService: CreateCustomerService = async (name: string) =>
    staticRestClient.post(
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