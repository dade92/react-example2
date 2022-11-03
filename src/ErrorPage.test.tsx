import {fireEvent, render, screen} from "@testing-library/react";
import {ErrorPage} from "./ErrorPage";

describe('ErrorPage', () => {
    it('Renders correctly', () => {
        const callback = jest.fn();

        render(<ErrorPage onTryAgain={callback}/>);

        expect(screen.getByTestId('error-message')).toHaveTextContent('Something went wrong.');
        expect(screen.getByTestId('error-img')).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('try-again-button'));

        expect(callback).toHaveBeenCalledTimes(1);
    })
})