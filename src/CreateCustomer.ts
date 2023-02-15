interface CreateCustomerResponse {
    code: string;
}

export const createCustomer = async (name: string, onSuccess: (customerName: string) => void, onFailure: () => void) => {
    const response = await fetch('/insert', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
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
        }),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

    if (response.status != 204) {
        console.log('Response is not OK: ', response);
        onFailure();
    } else {
        console.log('result is: ', response.status);

        onSuccess(name);
    }
};