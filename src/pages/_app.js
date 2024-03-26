import "@/styles/globals.css";
import {useRouter} from 'next/router';
import enMessages from '@/localization/en.json';
import azMessages from '@/localization/az.json';
import ruMessages from '@/localization/ru.json';
import deMessages from '@/localization/de.json';
import {IntlProvider} from "react-intl";

export default function App({Component, pageProps}) {
    const router = useRouter();
    const {locale} = router;

    const messages =
        {
            en: enMessages,
            az: azMessages,
            ru: ruMessages,
            de: deMessages
        }
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <Component {...pageProps} />
        </IntlProvider>



    );
}
