import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Name } from "/Users/davide/Documents/programming/react-example2/src/Name"

describe('Name', () => {
  it('contains correct properties', () => {
    const callback = jest.fn();
    render(<Name name={'ciccio'} surname={'pasticcio'} onClick={callback} />);
    expect(screen.getByTestId('name')).toHaveTextContent("Name: ciccio Surname: pasticcio");

    fireEvent.click(screen.getByTestId('name'));
    fireEvent.click(screen.getByTestId('name'));
    expect(callback.mock.calls.length).toBe(2);
  });
  
})