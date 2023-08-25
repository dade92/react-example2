jest.mock('./RestClient');
const mockedRestClient = jest.mocked(staticRestClient);

import {createCustomerRestService} from "./CreateCustomerRestService";
import {staticRestClient} from "./RestClient";

describe('CreateCustomerRestService', () => {

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