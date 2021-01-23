/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import App from "next/app";
import SimpleReactLightbox from "simple-react-lightbox";
import "../styles/globals.css";
import { appWithTranslation } from "../i18n";

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  );
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
