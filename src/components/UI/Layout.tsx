import React from "react";
import Footer from "./Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";

export const metadata = {
  title: "Urban Sketchers Istanbul",
};
interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const Layout = ({ children, pageTitle }: LayoutProps) => {
  const title = pageTitle
    ? pageTitle + " | Urban Sketchers Istanbul"
    : metadata.title;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <div
        className="min-h-screen bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-red-900 via-purple-900 to-indigo-900
      flex flex-col justify-between"
      >
        <div>
          <div className="container mx-auto py-10 flex-grow flex-shrink-0">
            {children}
          </div>
        </div>
        <div className=" ">
          <Footer />
          <GoogleAnalytics gaId="G-MBM3T9H0RF" />
        </div>
      </div>
    </>
  );
};
export default Layout;
