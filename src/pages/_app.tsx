import "@/styles/globals.css";
import { themeOptions } from "@/utils/theme";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import ResponsiveAppBar from "@/components/UI/NavBar";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ThemeProvider theme={themeOptions}>
          <div
            className="min-h-screen
            flex flex-col justify-between"
          >
            <div>
              <ResponsiveAppBar />
            </div>
            <Component {...pageProps} />
            <Analytics />
          </div>
        </ThemeProvider>
      </SessionProvider>
    </Provider>
  );
}
