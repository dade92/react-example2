import {cleanup, fireEvent, getByRole, screen, waitFor} from '@testing-library/react';
import {ShowCustomerData} from './ShowCustomerData';
import {Server} from "miragejs";
import {server} from "./server";
import { render } from './TestUtils';

describe('ShowCustomerData', () => {
    let mockServer: Server;

    beforeEach(() => {
        mockServer = server();
    })

    afterEach(() => {
        mockServer.shutdown();
        cleanup();
    })

    it('renders correctly, with button disabled and proper downloaded text', async () => {
        render(<ShowCustomerData onSubmit={jest.fn}/>);

        expect(screen.getByTestId('title')).toHaveTextContent("AppFlow");
        //TODO fix this: should be in another test
        await waitFor(() => expect(screen.getByTestId('joke')).toHaveTextContent("This is a joke"));
        await waitFor(() => expect(screen.getByTestId('username')).toHaveTextContent("Hi Sergio Botti"));
        expect(screen.getByTestId('stack')).toBeDefined();
        expect(screen.getByTestId('submit-button')).toBeDisabled();
    })

    it('Calls callback after click', async () => {
        const callback = jest.fn()

        render(<ShowCustomerData onSubmit={callback}/>);

        fireEvent.click(screen.getByTestId('checkbox'));
        fireEvent.change(screen.getByTestId('text').querySelector('input')!, {target: {value: 'test'}});

        fireEvent.click(screen.getByTestId('age-selector'))
        await waitFor(() => fireEvent.click(screen.getByText('30')))

        // UserEvent.click(getByRole(screen.getByTestId("age-selector"), "combobox"));
        // await waitFor(() => UserEvent.click(screen.getByText('25')));

        fireEvent.click(screen.getByTestId('submit-button'));

        expect(callback).toBeCalledTimes(1);
        expect(screen.getByTestId('snackbar')).toBeVisible();
        expect(screen.queryByTestId('alert')).toBeNull();
    })

    it('Show error message if text is less than 3 chars', () => {
        const callback = jest.fn()

        render(<ShowCustomerData onSubmit={callback}/>);

        fireEvent.click(screen.getByTestId('checkbox'));
        fireEvent.change(screen.getByTestId('text').querySelector('input')!, {target: {value: 'te'}});

        fireEvent.click(screen.getByTestId('submit-button'));

        expect(screen.getByTestId('alert')).toBeVisible();
        expect(screen.queryByTestId('snackbar')).toBeNull();
        expect(callback).toBeCalledTimes(0);
    })
})
