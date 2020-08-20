import React from "react";
import Row from "react-bootstrap/Row";

const Footer = () => {
  return (
    <Row
      style={{
        height: "5vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d5e8de",
        fontSize: "large",
        fontWeight: "bold",
        color: "rgb(69, 95, 75)",
      }}
    >
      Created by me
    </Row>
  );
};

export default Footer;
