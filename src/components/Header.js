import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { createUseStyles } from "react-jss";
import flowerbg from "../assets/17703.jpg";

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
});
const Header = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundImage: `url(${flowerbg})`,
        boxShadow: "5px 1px 5px 0 rgba(0,0,0,0.2)",
      }}
      className={classes.background}
      bg="light"
    >
      <Navbar expand="lg" className={classes.myNav}>
        <Navbar.Brand>
          <NavLink
            style={{
              fontFamily: "Pinyon Script, cursive",
              fontSize: "xx-large",
              color: "#00994d",
              textDecoration: "none",
            }}
            to="/"
          >
            Silvana y Daniel
          </NavLink>
        </Navbar.Brand>
      </Navbar>

      <Navbar expand="lg" className={classes.subNav}>
        <Nav>
          <NavLink className={classes.links} to="/about">
            About us
          </NavLink>
        </Nav>
        <Nav>
          <NavLink className={classes.links} to="/veracruz">
            Veracruz
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
