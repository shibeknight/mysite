import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, animateScroll as scroll } from "react-scroll";
import { createUseStyles } from "react-jss";
import flowerbg from "../assets/89210.jpg";

const useStyles = createUseStyles({
  myNav: {
    display: "flex",
    justifyContent: "center",
    minHeight: "11vh",
  },
  subNav: {
    justifyContent: "space-evenly",
    maxHeight: "3vh",
    flexWrap: "unset",
    paddingBottom: "2vh",
  },
  background: {
    backgroundSize: "cover",
    backgroundPosition: "initial",
  },
  links: {
    fontSize: "x-large",
    color: "#00994d",
    textDecoration: "none",
    "&:hover": {
      color: "#00994d",
      textDecoration: "none",
    },
  },
  title: {
    fontFamily: "Pinyon Script, cursive",
    fontSize: "3em",
    color: "#004d00",
    textDecoration: "none",
  },
  "@media (max-width: 727px)": {
    title: {
      fontSize: "1.2em",
    },
    links: {
      fontSize: "1.1em",
    },
  },
});
const Header = (props) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundImage: `url(${flowerbg})`,
        boxShadow: "5px 1px 5px 0 rgba(0,0,0,0.2)",
        position: "sticky",
        top: 0,
        zIndex: 2,
      }}
      className={classes.background}
      bg="light"
    >
      <Navbar expand="lg" className={classes.myNav}>
        <Navbar.Brand onClick={scrollToTop} className={classes.title}>
          Silvana y Daniel
        </Navbar.Brand>
      </Navbar>

      <Navbar expand="lg" className={classes.subNav}>
        <Nav className={classes.links}>
          <Link spy={true} smooth={-70} duration={500} to="about">
            About us
          </Link>
        </Nav>
        <Nav className={classes.links}>
          <Link spy={true} smooth={-70} duration={500} to="veracruz">
            Veracruz
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
