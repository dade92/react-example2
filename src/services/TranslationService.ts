import {RemoteTranslations} from "../RetrieveTranslations";
import {staticRestClient} from "../utils/RestClient";

export type TranslationService = () => Promise<RemoteTranslations>;

export const remoteTranslationService: TranslationService = () => {
    return staticRestClient.get<RemoteTranslations>('/translations/en');
}