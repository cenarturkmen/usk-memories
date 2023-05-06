import React from "react";
import ResponsiveAppBar from "./NavBar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-red-900 via-purple-700 to-indigo-100
      flex flex-col justify-between">
        <div>
          <ResponsiveAppBar />
          <div className="container mx-auto py-8 flex-grow flex-shrink-0">
            {children}
          </div>
        </div>
        <div className=" ">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Layout;
