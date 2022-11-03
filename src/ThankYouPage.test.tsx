import {render, screen} from '@testing-library/react'
import {ThankYouPage} from './ThankYouPage'

describe('ThankYouPage', () => {
    it('renders correctly', () => {
        render(<ThankYouPage customerName={'Sergio'} onRestart={jest.fn}/>);

        expect(screen.getByTestId('thankyou-message').textContent).toBe('Thanks for your selection Sergio!');
        expect(screen.getByTestId('thumbs-up')).toBeVisible();
    })
})