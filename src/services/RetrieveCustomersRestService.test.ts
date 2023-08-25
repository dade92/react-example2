import {retrieveCustomersRestService} from "./RetrieveCustomersService";
import {staticRestClient} from "../RestClient";

jest.mock('../RestClient');

describe('RetrieveCustomersRestService', () => {
    const mockedRestClient = jest.mocked(staticRestClient);

    it('happy path', async () => {
        const expectedResponse = {users: [
                {
                    name: 'ciccio',
                    surname: 'pasticcio',
                    data: null
                },{
                    name: 'ciccio2',
                    surname: 'pasticcio2',
                    data: null
                }
            ]};
        mockedRestClient.get.mockReturnValue(Promise.resolve(expectedResponse));
        const response =  await retrieveCustomersRestService();

        expect(response).toEqual(expectedResponse);
        expect(mockedRestClient.get).toHaveBeenCalledWith(
            "/retrieveUsers"
        );
    })

    it('fail', async () => {
        const error = new Error('failure');
        mockedRestClient.get.mockReturnValue(Promise.reject(error));

        try {
            await retrieveCustomersRestService();
        } catch (e) {
            expect(e).toEqual(error)
            expect(mockedRestClient.get).toHaveBeenCalledWith(
                "/retrieveUsers"
            );
        }
    })
})