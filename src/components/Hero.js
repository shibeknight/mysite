import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  myHero: {
    /* Set a specific height */
    /* Position and center the image to scale nicely on all screens */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  myHeroText: {
    color: "#d3d0ad",
  },
  myTitle: {
    textAlign: "center",
    fontSize: "4rem",
  },
  "@media (max-width: 727px)": {
    myTitle: {
      fontSize: "3em",
    },
  },
});

const Hero = (props) => {
  const classes = useStyles();
  return (
    <div
      className={classes.myHero}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})`,
        height: `${props.height ? props.height : "80vh"}`,
      }}
    >
      <div className={classes.myHeroText}>
        <ScrollAnimation animateIn="fadeInDown" animateOut="fadeOut">
          <h1
            className={classes.myTitle}
            style={
              props.cursive ? { fontFamily: "Pinyon Script, cursive" } : {}
            }
          >
            {props.title}
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut">
          <h3 style={{ opacity: "0.6", textAlign: "center" }}>
            {props.subtitle}
          </h3>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Hero;
