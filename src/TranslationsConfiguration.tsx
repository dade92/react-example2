import React, { useEffect, useState } from "react";
import { ReactNode } from "react";
import RestClient from "./RestClient";
import { useRestClientConfiguration } from "./RestClientConfiguration";

interface TranslationMap {
    [key: string]: string;
}

type TranslationRepository = (key: string) => string;

interface RemoteTranslations {
    translations: TranslationMap;
}

interface Translations {
    data: TranslationMap;
    translationRepository: TranslationRepository;
}

const retrieveConstTranslations = (): TranslationMap => {
    return {
        'appflow.customerData.hi': 'Hi',
        'appflow.customerData.t_and_c': 'Accept t&c',
    }
}

const RetrieveTranslations = (restClient: RestClient): TranslationMap => {
    const [data, setData] = useState<TranslationMap>({} as TranslationMap);


    useEffect(()=> {
        const response = restClient.get<RemoteTranslations>('/translations/en');

        response.then((translations) =>{
            setData(translations.translations);
        }).catch(()=> {
            console.log('Error fetching translations');
        })
    }, [])

    return data;
}

const createTranslationRepository = (data: TranslationMap): TranslationRepository => {
    return (key: string): string => data[key] || '';
}

const TranslationsContext = React.createContext<Translations>({} as Translations);

export const TranslationsConfiguration: React.FC<{ children: ReactNode }> = ({children}) => {
    const restClient = useRestClientConfiguration();
    const translations = RetrieveTranslations(restClient);
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