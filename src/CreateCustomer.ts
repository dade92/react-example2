interface CreateCustomerResponse {
  code: string;
};
  
export const createCustomer = async (name: string, onSuccess: (customerName: string) => void, onFailure: () => void) => {
  const response = await fetch('http://localhost:8081/createCustomer', {
    method: 'POST',
    body: JSON.stringify({
      name: name
    }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    console.log('Response is not OK: ', response);
    onFailure();
  } else {
    const result = (await response.json()) as CreateCustomerResponse;

    console.log('result is: ', result.code);

    onSuccess(name);
  }
};