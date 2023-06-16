import {cleanup, fireEvent, screen, waitFor} from '@testing-library/react';
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
        render(<ShowCustomerData username={'test'} consent={false} onSubmit={jest.fn}/>);

        expect(screen.getByTestId('title')).toHaveTextContent("AppFlow");
        await waitFor(() => expect(screen.getByTestId('username')).toHaveTextContent("Hi Sergio Botti"));
        expect(screen.getByTestId('wrapper')).toBeDefined();
        expect(screen.getByTestId('submit-button')).toBeDisabled();
    })

    it('Calls callback after click', () => {
        const callback = jest.fn()

        render(<ShowCustomerData username={''} consent={false} onSubmit={callback}/>);

        fireEvent.click(screen.getByTestId('checkbox'));
        fireEvent.change(screen.getByTestId('text').querySelector('input')!, {target: {value: 'test'}});

        fireEvent.click(screen.getByTestId('submit-button'));

        expect(callback).toBeCalledTimes(1);
        expect(screen.getByTestId('snackbar')).toBeVisible();
        expect(screen.queryByTestId('alert')).toBeNull();
    })

    it('Show error message if text is less than 3 chars', () => {
        const callback = jest.fn()

        render(<ShowCustomerData username={''} consent={false} onSubmit={callback}/>);

        fireEvent.click(screen.getByTestId('checkbox'));
        fireEvent.change(screen.getByTestId('text').querySelector('input')!, {target: {value: 'te'}});

        fireEvent.click(screen.getByTestId('submit-button'));

        expect(screen.getByTestId('alert')).toBeVisible();
        expect(screen.queryByTestId('snackbar')).toBeNull();
        expect(callback).toBeCalledTimes(0);
    })
})
