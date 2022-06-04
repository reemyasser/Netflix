import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import EnglishTranslation from './Localizations/EnglishLocal.json';
import ArabicTranslation from './Localizations/ArabicLocal.json';


const resources = {
    "en":{
        translation:EnglishTranslation
    },
    "ar":{
        translation:ArabicTranslation
    }
}

i18next.use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
       lng: 'ar', // if you're using a language detector, do not define the lng option
      debug: true,
    


    resources
    });


    export default i18next;