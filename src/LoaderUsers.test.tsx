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

        expect(screen.getByTestId('loader')).toBeInTheDocument();
        expect(screen.queryByTestId('error-label')).not.toBeInTheDocument();
    })

    it('renders error message in case of errors', () => {
        render(<LoaderUsers error={true}/>);

        expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
        expect(screen.getByTestId('error-label')).toBeInTheDocument();
    })
})