import React, { PropsWithChildren } from "react";
import ResponsiveAppBar from "./NavBar";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ResponsiveAppBar />
      <div>{children}</div>
    </>
  );
};
export default Layout;
