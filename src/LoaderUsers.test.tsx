import { screen} from "@testing-library/react"
import {LoaderUsers} from "./LoaderUsers"
import { Server } from "miragejs";
import { server } from "./server";
import { render } from "./TestUtils";

describe('LoaderUsers', () => {

    let mockServer: Server;

    beforeEach(() => {
        mockServer = server();
    })

    afterEach(() => {
        mockServer.shutdown();
    })

    it('renders loader in case of no errors', () => {
        render(<LoaderUsers error={false}/>);

        expect(screen.getByTestId('loader')).toBeDefined();
        expect(screen.queryByTestId('error-label')).toBeNull();
    })

    it('renders error message in case of errors', () => {
        render(<LoaderUsers error={true}/>);

        expect(screen.queryByTestId('loader')).toBeNull();
        expect(screen.getByTestId('error-label')).toBeDefined();
    })
})