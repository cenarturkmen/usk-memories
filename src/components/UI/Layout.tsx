import React, { PropsWithChildren } from "react";
import ResponsiveAppBar from "./NavBar";
import Footer from "./Footer";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-red-900 via-purple-700 to-indigo-100">
        <ResponsiveAppBar />
        <div>{children}</div>
        <div className=" ">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Layout;
