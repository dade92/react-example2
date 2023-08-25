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
})