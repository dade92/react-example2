import {fireEvent, render, screen} from '@testing-library/react'
import {ThankYouPage} from './ThankYouPage'

describe('ThankYouPage', () => {
    it('renders correctly', () => {
        let callback = jest.fn();
        render(<ThankYouPage customerName={'Sergio'} onRestart={callback}/>);

        fireEvent.click(screen.getByTestId('restart-button'))

        expect(screen.getByTestId('thankyou-message').textContent).toBe('Thanks for your selection Sergio!');
        expect(screen.getByTestId('thumbs-up')).toBeVisible();
        expect(callback).toHaveBeenCalledTimes(1);
    })
})