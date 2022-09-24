import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { ShowCustomerData } from './ShowCustomerData';
import { UserConfiguration } from './CustomerConfiguration'

describe('ShowCustomerData', () => {
    afterEach(() => {
        cleanup
    })
    
    it('renders without crashing', () => {
        render(<ShowCustomerData/>);
    })
    
    it('renders correctly', () => {
        const {getByTestId} = render(<ShowCustomerData/>);
        expect(getByTestId('title')).toHaveTextContent("Title");
    })
})
