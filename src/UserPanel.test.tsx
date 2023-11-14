import {render} from "./utils/TestUtils";
import {UserPanel} from "./UserPanel";
import {waitFor} from "@testing-library/react";
import {screen} from '@testing-library/react';

describe('UserPanel', () => {
    it('Shows the user data when fetch is successful', () => {
        const retrieveSingleCustomerService = jest.fn(() => Promise.resolve({
            name: 'Davide',
            surname: 'Botti',
            data: null
        }));

        render(<UserPanel retrieveSingleCustomerService={retrieveSingleCustomerService}/>);

        waitFor(() => {
            expect(screen.getByTestId('username')).toHaveTextContent('Hi Davide Botti')
            expect(screen.queryByTestId('error-label')).not.toBeVisible();
        });
    })

    it('Shows the loader if something goes wrong', () => {
        const retrieveSingleCustomerService = jest.fn(() => Promise.reject());

        render(<UserPanel retrieveSingleCustomerService={retrieveSingleCustomerService}/>);

        waitFor(() => {
            expect(screen.queryByTestId('username')).not.toBeVisible();
            expect(screen.getByTestId('error-label')).toBeVisible();
        });
    });
})