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
  },
  background: {
    backgroundSize: "cover",
    backgroundPosition: "initial",
  },
});
const Header = () => {
  const classes = useStyles();
  return (
    <div
      style={{ backgroundImage: `url(${flowerbg})` }}
      className={classes.background}
      bg="light"
    >
      <Navbar expand="lg" className={classes.myNav}>
        <Navbar.Brand>
          <NavLink
            style={{
              fontFamily: "Pinyon Script, cursive",
              fontSize: "xx-large",
              color: "#00cc66",
            }}
            to="/"
          >
            Silvana y Daniel
          </NavLink>
        </Navbar.Brand>
      </Navbar>

      <Navbar expand="lg" className={classes.subNav}>
        <Nav>
          <Nav.Link>
            <NavLink
              style={{
                fontSize: "large",
                color: "#00cc66",
              }}
              to="/about"
            >
              About us
            </NavLink>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <NavLink
              style={{
                fontSize: "large",
                color: "#00cc66",
              }}
              to="/veracruz"
            >
              Veracruz
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
