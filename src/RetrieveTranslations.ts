import { useEffect, useState } from "react";
import RestClient from "./RestClient";
import { TranslationMap } from "./TranslationsConfiguration";

interface RemoteTranslations {
    translations: TranslationMap;
}

export const RetrieveTranslations = (restClient: RestClient): TranslationMap => {
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
