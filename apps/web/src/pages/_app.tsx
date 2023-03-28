import { ApolloProvider } from "@apollo/client";
import { useGraph } from "@shaka-web-hooks/use-graph";
import { useTheme } from "@shaka-web-hooks/use-theme";
import shape from "@shaka-web-shapes/store";
import "@shaka-web-styles/App.css";
import "@shaka-web-styles/globals.css";
import "flag-icons/css/flag-icons.min.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import * as React from "react";
import { Provider as ShapesProvider } from "react-redux";
import "tailwindcss/tailwind.css";
import { themeChange } from "theme-change";

const App = ({ Component, pageProps }: AppProps) => {
  const { graph } = useGraph(pageProps);

  React.useEffect(() => {
    themeChange(false);
  }, []);

  useTheme();

  return (
    <ShapesProvider store={shape}>
      <ApolloProvider client={graph}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ShapesProvider>
  );
};

export default appWithTranslation(App);
