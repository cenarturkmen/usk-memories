import React, { PropsWithChildren } from "react";
import ResponsiveAppBar from "./NavBar";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ResponsiveAppBar />
      {children}
    </>
  );
};
export default Layout;
