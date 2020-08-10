import React from "react";
import Header from "./Header";

const Layout = (props) => {
  
  const { children } = props;
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
