import {render, screen} from "@testing-library/react"
import {LoaderUsers} from "./LoaderUsers"

describe('LoaderUsers', () => {

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