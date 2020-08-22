import React from "react";
import Row from "react-bootstrap/Row";
import { createUseStyles } from "react-jss";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

const useStyles = createUseStyles({
  links: {
    color: "rgb(69, 95, 75)",
    textDecoration: "none",
    verticalAlign: "middle",
    "&:hover": {
      color: "rgb(69, 95, 75)",
      textDecoration: "none",
    },
  },
  myRow: {
    height: "5vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d5e8de",
    fontSize: "large",
    fontWeight: "bold",
    color: "rgb(69, 95, 75)",
    width: "100%",
    marginLeft: "0",
    marginRight: "0",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Row className={classes.myRow}>
      ©Daniel Ceballos
      <a
        href="https://www.linkedin.com/in/daniel-ceballos93/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineLinkedin className={classes.links} size="1.5em" />
      </a>
      <a
        href="https://github.com/shibeknight"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineGithub className={classes.links} size="1.5em" />
      </a>
    </Row>
  );
};

export default Footer;
