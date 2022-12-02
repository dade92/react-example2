import {fireEvent, render, screen} from "@testing-library/react";
import {MyModal} from "./MyModal";

describe('MyModal', () => {
    it('renders correctly and calls the callback', () => {
        const onConfirm = jest.fn();
        const onClose = jest.fn();

        render(<MyModal isOpen={true} onConfirm={onConfirm} onClose={onClose}/>)

        expect(screen.getByTestId('title')).toHaveTextContent('Are you sure?')
        expect(screen.getByTestId('content')).toHaveTextContent('By clicking on confirm you confirm the operation')

        fireEvent.click(screen.getByTestId('confirm-button'));

        expect(onConfirm).toHaveBeenCalledTimes(1);
        expect(onClose).toHaveBeenCalledTimes(0);
    })

    it('calls the callback on close button click', () => {
        const onClose = jest.fn();
        const onConfirm = jest.fn();

        render(<MyModal isOpen={true} onConfirm={onConfirm} onClose={onClose}/>)

        fireEvent.click(screen.getByTestId('close-button'));

        expect(onClose).toHaveBeenCalledTimes(1);
        expect(onConfirm).toHaveBeenCalledTimes(0);
    })
})