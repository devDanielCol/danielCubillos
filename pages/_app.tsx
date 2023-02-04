import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import ThemeConfigProvider from "../components/ThemeCtrl/ThemeConfigProvider";
import { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <ThemeConfigProvider>
          <Component {...pageProps} />
        </ThemeConfigProvider>
      </Provider>
    </>
  );
};

export default App;
