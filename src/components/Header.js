import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import { Link, animateScroll as scroll } from "react-scroll";
import { createUseStyles } from "react-jss";
import flowerbg from "../assets/89210.jpg";

const useStyles = createUseStyles({
  subNav: {
    justifyContent: "flex-end",
    maxHeight: "3vh",
    flexWrap: "unset",
    paddingBottom: "2vh",
    alignItems: 'normal', 
  },
  background: {
    backgroundSize: "cover",
    backgroundPosition: "initial",
  },
  links: {
    fontSize: "x-large",
    color: "#00994d",
    padding: '10px',
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
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundImage: `url(${flowerbg})`,
        boxShadow: "5px 1px 5px 0 rgba(0,0,0,0.2)",
        position: "sticky",
        top: 0,
        zIndex: 2,
        height: '7vh'
      }}
      className={classes.background}
      bg="light"
    >
      {/* <Navbar expand="lg" className={classes.myNav}>
        <Navbar.Brand onClick={scrollToTop} className={classes.title}>
          Silvana y Daniel
        </Navbar.Brand>
      </Navbar> */}

      <Navbar expand="lg" className={classes.subNav}>
        <Nav className={classes.links}>
          Home
        </Nav>
        <Nav className={classes.links}>
          {/* <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            to="veracruz"
          >
            Veracruz
          </Link> */}
          Location
        </Nav>
        <Nav className={classes.links}>
          Gifts
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
