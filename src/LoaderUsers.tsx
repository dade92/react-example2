import { CircularProgress } from "@mui/material";
import { FC } from "react";

interface Props {
    error: boolean;
}

export const LoaderUsers: FC<Props> = ({error})=> {
    return <>
        {
            error 
            ? <span data-testid={'error-label'}>Error in loading users...</span> 
            : <CircularProgress data-testid={'loader'}/>
        }
    </>
}