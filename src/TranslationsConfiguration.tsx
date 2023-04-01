import React from "react";
import { ReactNode } from "react";

interface TranslationMap {
    [key: string]: string;
}

type TranslationRepository = (key: string) => string;

interface Translations {
    data: TranslationMap;
    translationRepository: TranslationRepository;
}

const retrieveTranslations = (): TranslationMap => {
    return {
        'appflow.customerData.hi': 'Hi',
        'appflow.customerData.t_and_c': 'Accept t&c',
    }
}

const createTranslationRepository = (data: TranslationMap): TranslationRepository => {
    return (key: string): string => data[key] || '';
}

const TranslationsContext = React.createContext<Translations>({} as Translations);

export const TranslationsConfiguration: React.FC<{ children: ReactNode }> = ({children}) => {
    const translations = retrieveTranslations();
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