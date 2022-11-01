import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import styled from 'styled-components';

const ThankYouWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center; /*centers items on the line (the x-axis by default)*/
    align-items: center; /*centers items on the cross-axis (y by default)*/
`;

interface Props {
    customerName: string;
}

export const ThankYouPage: React.FC<Props> = ({customerName}) => {
    return (
        <ThankYouWrapper>
            <ThumbUpIcon />
            <span>Thanks for your selection {customerName}!</span>
        </ThankYouWrapper>
    )
}