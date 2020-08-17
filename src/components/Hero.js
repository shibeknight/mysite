import React from "react";
import hero from "../assets/heropic.jpeg";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  myHero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`,
    /* Set a specific height */
    /* Position and center the image to scale nicely on all screens */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    height: "80vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  myHeroText: {
    color: "#d3d0ad",
  },
});

const Hero = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.myHero}>
      <div className={classes.myHeroText}>
        <h1 style={{ textAlign: "center", fontSize: "xxx-large" }}>
          Silvana y Daniel
        </h1>
        <h3 style={{ opacity: "0.6", textAlign: "center" }}>
          November 28, 2020 - Veracruz, Mexico
        </h3>
      </div>
    </div>
  );
};

export default Hero;
