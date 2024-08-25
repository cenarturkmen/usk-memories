import React from "react";
import Footer from "./Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: 'USKMemories| Urban Sketchers',
}
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
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
