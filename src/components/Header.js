import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { createUseStyles } from "react-jss";
import flowerbg from "../assets/89210.jpg";

const useStyles = createUseStyles({
  subNav: {
    justifyContent: "flex-end",
    maxHeight: "3vh",
    flexWrap: "unset",
  },
  background: {
    backgroundSize: "cover",
    backgroundPosition: "initial",
  },
  links: {
    fontSize: "x-large",
    color: "#00994d",
    margin: "10px",
    textDecoration: "none",
    "&:hover": {
      color: "#00994d",
      textDecoration: "none",
    },
  },
  title: {
    fontFamily: "Pinyon Script, cursive",
    fontSize: "3em",
    color: "#004d00 !important",
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
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundImage: `url(${flowerbg})`,
        boxShadow: "5px 1px 5px 0 rgba(0,0,0,0.2)",
        position: "sticky",
        top: 0,
        zIndex: 2,
        height: "7vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      className={classes.background}
      bg="light"
    >
      <Navbar expand="lg" className={classes.subNav}>
        <NavLink
          activeStyle={{ fontWeight: "bold" }}
          to="/home"
          className={classes.links}
        >
          Home
        </NavLink>
        <NavLink
          activeStyle={{ fontWeight: "bold" }}
          to="/location"
          className={classes.links}
        >
          Location
        </NavLink>
        <NavLink
          activeStyle={{ fontWeight: "bold" }}
          to="/gifts"
          className={classes.links}
        >
          Gifts
        </NavLink>
        <NavLink
          activeStyle={{ fontWeight: "bold" }}
          to="/reserve"
          className={classes.links}
        >
          RSVP
        </NavLink>
      </Navbar>
    </div>
  );
};

export default Header;
