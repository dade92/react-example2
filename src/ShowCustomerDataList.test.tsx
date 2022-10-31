import { render, screen, waitFor } from "@testing-library/react"
import { Server } from "miragejs";
import { server } from "./server";
import { ShowCustomerDataList } from "./ShowCustomerDataList"

describe('ShowCustomerDataList',()=> {

    let mockServer: Server;

    beforeEach(()=>{
        mockServer = server();
    })

    afterEach(()=>{
        mockServer.shutdown();
    })

    it('renders correctly',async ()=> {
        render(<ShowCustomerDataList/>)

        expect(screen.getByTestId('inbox-item')).toBeDefined();

        await waitFor(()=>expect(screen.getByTestId('user-item-0')).toBeDefined());
        await waitFor(()=>expect(screen.getByTestId('user-item-1')).toBeDefined());
    })

    it('handles API error',async ()=> {
        //TODO handle error properly
        render(<ShowCustomerDataList/>)

        expect(screen.getByTestId('inbox-item')).toBeDefined();
        expect(screen.getByTestId('loader')).toBeDefined();
    })


})