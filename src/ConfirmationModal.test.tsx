import {fireEvent, screen, waitFor} from "@testing-library/react";
import {ConfirmationModal} from "./ConfirmationModal";
import {render} from "./utils/TestUtils";
import {Server} from "miragejs";
import {server} from "./server";

describe('ConfirmationModal', () => {
    let mockServer: Server;

    beforeEach(() => {
        mockServer = server();
    })

    afterEach(() => {
        mockServer.shutdown();
    })

    it('renders correctly and calls the callback', () => {
        const onConfirm = jest.fn();
        const onClose = jest.fn();

        render(<ConfirmationModal isOpen={true} onConfirm={onConfirm} onClose={onClose}/>)

        waitFor(() => expect(screen.getByTestId('title')).toHaveTextContent('Are you sure???'));
        waitFor(() => expect(screen.getByTestId('content')).toHaveTextContent('By clicking on confirm you confirm the operation'));

        fireEvent.click(screen.getByTestId('confirm-button'));

        expect(onConfirm).toHaveBeenCalledTimes(1);
        expect(onClose).toHaveBeenCalledTimes(0);
    })

    it('calls the callback on close button click', () => {
        const onClose = jest.fn();
        const onConfirm = jest.fn();

        render(<ConfirmationModal isOpen={true} onConfirm={onConfirm} onClose={onClose}/>)

        fireEvent.click(screen.getByTestId('close-button'));

        expect(onClose).toHaveBeenCalledTimes(1);
        expect(onConfirm).toHaveBeenCalledTimes(0);
    })
})