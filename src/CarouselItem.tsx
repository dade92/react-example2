import { Button, Paper } from "@mui/material";

interface Props {
    name: string;
    description: string;
}

export const CarouselItem: React.FC<Props> = ({name, description}) => {
    return (
        <Paper>
            <h2>{name}</h2>
            <p>{description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}