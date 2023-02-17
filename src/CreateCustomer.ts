import { RestClient } from "./RestClient";

interface CreateCustomerResponse {
    code: string;
}

const restClient = new RestClient();

export const createCustomer = async (name: string, onSuccess: (customerName: string) => void, onFailure: () => void) => {
    try {
        const response = await restClient.post(
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
        console.log('result is: ', response);

        onSuccess(name);
    } catch (e: any) {
        console.log('Response is not OK: ' + e);
        onFailure();
    }
};