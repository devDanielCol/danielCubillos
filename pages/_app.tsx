import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import ThemeConfigProvider from "../components/ThemeCtrl/ThemeConfigProvider";
import { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { AppProvidersProps } from "../types/app";

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

const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AppProviders, ...options });

export default App;
export { customRender as render };
