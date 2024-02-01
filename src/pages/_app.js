import "@/styles/globals.css";
import {IntlProvider} from '';

export default function App({ Component, pageProps }) {
  return (
      <IntlProvider>
        <Component {...pageProps} />
      </IntlProvider>
  );
}
