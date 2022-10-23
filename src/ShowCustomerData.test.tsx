import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { ShowCustomerData } from './ShowCustomerData';

describe('ShowCustomerData', () => {
    afterEach(() => {
        cleanup
    })
    
    it('renders correctly', () => {
        render(<ShowCustomerData onSubmit={jest.fn}/>);

        expect(screen.getByTestId('title')).toHaveTextContent("Title");
        expect(screen.getByTestId('stack')).toBeDefined();
    })

    it('Calls callback after click', () => {
        const callback = jest.fn()

        render(<ShowCustomerData onSubmit={callback}/>);

        fireEvent.click(screen.getByTestId('checkbox'));
        fireEvent.change(screen.getByTestId('text').querySelector('input')!, {target: {value: 'test'}});

        fireEvent.click(screen.getByTestId('submit-button'));

        expect(callback).toBeCalledTimes(1);
        expect(screen.queryByTestId('alert')).toBeNull();
    })

    it('Show error message if text is less than 3 chars', () => {
        const callback = jest.fn()

        render(<ShowCustomerData onSubmit={callback}/>);

        fireEvent.click(screen.getByTestId('checkbox'));
        fireEvent.change(screen.getByTestId('text').querySelector('input')!, {target: {value: 'te'}});

        fireEvent.click(screen.getByTestId('submit-button'));

        expect(screen.getByTestId('alert')).toBeVisible();
        expect(callback).toBeCalledTimes(0);
    })
})
