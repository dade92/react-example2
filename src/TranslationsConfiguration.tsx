import React, {ReactNode} from "react";
import {useRestClient} from "./RestClientConfiguration";
import {RemoteTranslations, useRetrieveTranslations} from "./RetrieveTranslations";

export interface TranslationMap {
    [key: string]: string;
}

type TranslationRepository = (key: string) => string;

interface Translations {
    data: TranslationMap;
    translationRepository: TranslationRepository;
}

const createTranslationRepository = (data: TranslationMap): TranslationRepository =>
    (key: string): string => data[key] || ''

const TranslationsContext = React.createContext<Translations>({} as Translations);

export const TranslationsConfiguration: React.FC<{ children: ReactNode }> = ({children}) => {
    const restClient = useRestClient();
    const translations = useRetrieveTranslations(() => restClient.get<RemoteTranslations>('/translations/en'));
    const defaultTranslationRepository: TranslationRepository = createTranslationRepository(translations);

    return (
        <TranslationsContext.Provider value={
            {data: translations, translationRepository: defaultTranslationRepository}
        }>
            {children}
        </TranslationsContext.Provider>
    )
}

export const useTranslations = () => React.useContext(TranslationsContext);