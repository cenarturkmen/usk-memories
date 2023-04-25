import Layout from "@/components/UI/Layout";
import "@/styles/globals.css";
import { themeOptions } from "@/utils/theme";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={themeOptions}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}
