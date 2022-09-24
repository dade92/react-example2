import React from 'react';
import { render } from '@testing-library/react';
import { Name } from "/Users/davide/Documents/programming/react-example2/src/Name"

describe('Name', () => {
  it('contains correct properties', () => {
    const {getByTestId} = render(<Name name={'ciccio'} surname={'pasticcio'} onClick={jest.fn} />);
    expect(getByTestId('name')).toHaveTextContent("Name: ciccio Surname: pasticcio");
  });
  
})