import { useEffect, useState } from "react";
import { TranslationMap } from "./TranslationsConfiguration";

export interface RemoteTranslations {
    translations: TranslationMap;
}

export const useRetrieveTranslations = (fetch: () => Promise<RemoteTranslations>): TranslationMap => {
    const [data, setData] = useState<TranslationMap>({} as TranslationMap);


    useEffect(()=> {
        fetch().then((r) =>{
            setData(r.translations);
        }).catch(()=> {
            console.log('Error fetching translations');
        })
    }, [])

    return data;
}
