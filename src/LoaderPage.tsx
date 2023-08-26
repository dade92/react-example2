import { FC } from "react";
import { CustomLoader } from "./CustomLoader";
import styled from "styled-components";
import { CenterWrapper } from "./CenterWrapper";
import { useTranslations } from "./TranslationsConfiguration";

export const LoaderPage: FC = () => {
    const { translationRepository } = useTranslations();
    
    return (
        <CenterWrapper>
            <CustomLoader/>
            <span>{translationRepository('appflow.loading.loading_message')}</span>
        </CenterWrapper>
    )
}