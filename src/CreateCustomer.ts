import React from 'react';
  
interface CreateCustomerResponse {
  code: string;
};
  
export const createCustomer = async (name: string, onConfirm: () => void) => {
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
    throw new Error(`Error! status: ${response.status}`);
  }
  const result = (await response.json()) as CreateCustomerResponse;

  console.log('result is: ', result.code);

  onConfirm();
};