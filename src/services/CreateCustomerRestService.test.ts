jest.mock('./RestClient');
import {staticRestClient} from "../RestClient";

import {createCustomerRestService} from "./CreateCustomerRestService";

describe('CreateCustomerRestService', () => {
    const mockedRestClient = jest.mocked(staticRestClient);

    it('happy path', async () => {
        const expectedResponse = {code: 'abc'};
        mockedRestClient.post.mockReturnValue(Promise.resolve(expectedResponse));
        const response =  await createCustomerRestService( 'ciccio pasticcio');

        expect(response).toEqual(expectedResponse);
        expect(mockedRestClient.post).toHaveBeenCalledWith(
            "/insert",
            {"age": 30, "favouriteDestinations": {"destinations": [{"city": "Milan"}, {"city": "Erba"}]}, "name": "ciccio pasticcio"})
    })

    it('fail', async () => {
        const error = new Error('failure');
        mockedRestClient.post.mockReturnValue(Promise.reject(error));

        try {
            await createCustomerRestService('ciccio pasticcio');
        } catch (e) {
            expect(e).toEqual(error)
            expect(mockedRestClient.post).toHaveBeenCalledWith(
                "/insert",
                {"age": 30, "favouriteDestinations": {"destinations": [{"city": "Milan"}, {"city": "Erba"}]}, "name": "ciccio pasticcio"})
        }
    })
})