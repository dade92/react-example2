import {fireEvent, render, screen, waitFor} from "@testing-library/react"
import {createServer, Server} from "miragejs";
import {init500Array, server} from "./server";
import {ShowCustomerDataList} from "./ShowCustomerDataList"

describe('ShowCustomerDataList', () => {

    let mockServer: Server;

    beforeEach(() => {
        mockServer = server();
    })

    afterEach(() => {
        mockServer.shutdown();
    })

    it('renders correctly', async () => {
        render(<ShowCustomerDataList onUndo={jest.fn} onSubmit={jest.fn} onModalClose={jest.fn} onModalConfirm={jest.fn} isModalOpen={false}/>)

        expect(screen.getByTestId('inbox-item')).toBeDefined();
        expect(screen.getByTestId('inbox-item')).toHaveTextContent('Inbox');
        expect(screen.getByTestId('drafts-item')).toBeDefined();
        expect(screen.getByTestId('drafts-item')).toHaveTextContent('Drafts');

        await waitFor(() => expect(screen.getByTestId('user-item-0')).toBeDefined());
        await waitFor(() => expect(screen.getByTestId('user-item-1')).toBeDefined());
    })

    it('calls the callback modal when confirmed', () => {
        let onSubmit = jest.fn();
        render(<ShowCustomerDataList onUndo={jest.fn} onSubmit={onSubmit} onModalClose={jest.fn} onModalConfirm={jest.fn} isModalOpen={false}/>)

        fireEvent.click(screen.getByTestId('submit-button'));

        expect(onSubmit).toHaveBeenCalledTimes(1);
    })

    it('displays the modal if needed', () => {
        render(<ShowCustomerDataList onUndo={jest.fn} onSubmit={jest.fn} onModalClose={jest.fn} onModalConfirm={jest.fn} isModalOpen={true}/>);

        expect(screen.getByTestId('confirm-dialog')).toBeVisible();
    })

    it('handles API error', async () => {
        mockServer = createServer({
            logging: true,
            routes() {
                this.urlPrefix = 'http://localhost:8081';
                this.get('/retrieveUsers', init500Array);
            },
        });
        render(<ShowCustomerDataList onUndo={jest.fn} onSubmit={jest.fn} onModalClose={jest.fn} onModalConfirm={jest.fn} isModalOpen={false}/>);

        expect(screen.getByTestId('inbox-item')).toBeVisible();
        expect(screen.getByTestId('loader')).toBeVisible();
        await waitFor(() => expect(screen.getByTestId('error-label')).toBeVisible());
    })

    it('calls onUndo when undo button is clicked', () => {
        const callback = jest.fn();

        render(<ShowCustomerDataList onUndo={callback} onSubmit={jest.fn} onModalClose={jest.fn} onModalConfirm={jest.fn} isModalOpen={false}/>)

        fireEvent.click(screen.getByTestId('undo-button'));

        expect(callback).toHaveBeenCalled();
    })

})