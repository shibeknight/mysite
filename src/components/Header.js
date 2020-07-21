import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  myNav: {
    display: "flex",
    justifyContent: "center",
    minHeight: "11vh",
    border: 'solid green',
  },
  subNav: {
    justifyContent: "space-around",
    maxHeight: "3vh",
    flexWrap: 'unset',
    border: 'solid red',
  },
});
const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar bg="light" expand="lg" className={classes.myNav}>
        <Navbar.Brand>
          <NavLink to="/">Silvana y Daniel</NavLink>
        </Navbar.Brand>
      </Navbar>

      <Navbar bg="light" expand="lg" className={classes.subNav}>
        <Nav>
          <Nav.Link>
            <NavLink to="/about">About us</NavLink>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <NavLink to="/veracruz">Veracruz</NavLink>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
