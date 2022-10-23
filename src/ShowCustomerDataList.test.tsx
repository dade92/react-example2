import { render, screen } from "@testing-library/react"
import { server } from "./server";
import { ShowCustomerDataList } from "./ShowCustomerDataList"

describe('ShowCustomerDataList',()=> {

    it('renders correctly',async ()=> {
        const mockServer = server();
        
        render(<ShowCustomerDataList/>)

        await expect(screen.getByTestId('inbox-item')).toBeDefined();

        await expect(screen.getByTestId('user-item-1')).toBeDefined();
        await expect(screen.getByTestId('user-item-2')).toBeDefined();

        mockServer.shutdown();
    })
})