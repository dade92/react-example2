import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {CenterWrapper} from "./CenterWrapper";

interface Props {
    customerName: string;
}

export const ThankYouPage: React.FC<Props> = ({customerName}) => {
    return (
        <CenterWrapper>
            <ThumbUpIcon data-testid='thumbs-up'/>
            <span data-testid='thankyou-message'>Thanks for your selection {customerName}!</span>
        </CenterWrapper>
    )
}