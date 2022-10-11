import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { ShowCustomerData } from './ShowCustomerData';

describe('ShowCustomerData', () => {
    afterEach(() => {
        cleanup
    })
    
    it('renders without crashing', () => {
        render(<ShowCustomerData onSubmit={jest.fn}/>);
    })
    
    it('renders correctly', () => {
        render(<ShowCustomerData onSubmit={jest.fn}/>);

        expect(screen.getByTestId('title')).toHaveTextContent("Title");
        expect(screen.getByTestId('stack')).toBeDefined();
    })
})
