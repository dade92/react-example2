import {Alert, CircularProgress} from "@mui/material";
import {FC} from "react";
import {useTranslations} from "./TranslationsConfiguration";

interface Props {
    error: boolean;
}

export const LoaderUsers: FC<Props> = ({error}) => {
    const {translationRepository} = useTranslations();

    return error ?
        <Alert data-testid={'error-label'} severity="warning">
            {translationRepository('appflow.customerData.noUser')}
        </Alert> : <CircularProgress data-testid={'loader'}/>;
}