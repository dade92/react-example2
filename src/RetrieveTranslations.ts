import { useEffect, useState } from "react";
import { TranslationMap } from "./TranslationsConfiguration";

export interface RemoteTranslations {
    translations: TranslationMap;
}

export const RetrieveTranslations = (fetch: () => Promise<RemoteTranslations>): TranslationMap => {
    const [data, setData] = useState<TranslationMap>({} as TranslationMap);


    useEffect(()=> {
        const response = fetch();

        response.then((r) =>{
            setData(r.translations);
        }).catch(()=> {
            console.log('Error fetching translations');
        })
    }, [])

    return data;
}
