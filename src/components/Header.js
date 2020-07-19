import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  myNav: {
    display: "flex",
    justifyContent: "center",
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

      <Navbar bg="light" expand="lg">
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink to="/about">About</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/veracruz">Veracruz</NavLink>
            </Nav.Link>
          </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
