import {fireEvent, screen} from '@testing-library/react'
import {ThankYouPage} from './ThankYouPage'
import { render } from './TestUtils';

describe('ThankYouPage', () => {
    it('renders correctly', () => {
        let callback = jest.fn();
        render(<ThankYouPage customerName={'Sergio'} onRestart={callback}/>);

        expect(screen.getByTestId('thankyou-message')).toBeInTheDocument();
        expect(screen.getByTestId('thumbs-up')).toBeInTheDocument();
        
        fireEvent.click(screen.getByTestId('restart-button'))

        expect(callback).toHaveBeenCalledTimes(1);
    })
})