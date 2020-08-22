import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div style={{overflow: 'hidden'}}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
