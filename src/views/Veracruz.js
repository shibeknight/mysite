import React from "react";
import { createUseStyles } from "react-jss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import CardBasic from "../components/CardBasic";
import ScrollAnimation from "react-animate-on-scroll";
import veracruz from "../assets/veracruz/9.JPG";
import ver1 from "../assets/veracruz/12.jpg";
import ver2 from "../assets/veracruz/11.jpg";
import ver3 from "../assets/veracruz/3.jpg";
import hotel from "../assets/veracruz/hotel.jpg";
import hotel2 from "../assets/veracruz/hotel2.jpg";
import mapa from "../assets/veracruz/veracruzmapa.png";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas dui et facilisis porttitor. Morbi ultrices diam vitae libero aliquet, ac luctus ante egestas. Maecenas finibus luctus tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ac mauris eleifend, semper libero quis, vehicula nibh. Nullam fermentum nisi eu neque placerat, sed euismod elit faucibus. Etiam placerat finibus vehicula. Duis a ex at nisl consequat dapibus quis at ligula.";

const useStyles = createUseStyles({
  myContainer: {
    padding: "0",
    margin: "0",
    backgroundColor: "#f7f1f0",
  },
  myCol: {
    display: "flex",
    justifyContent: "center",
  },
  myRow: {
    paddingTop: "4.2vh",
    paddingRight: "20px",
    paddingLeft: "20px",
    marginRight: "auto",
    marginLeft: "auto",
    justifyContent: "center",
  },
  myImage: {
    maxWidth: "500px",
  },
  "@media (max-width: 727px)": {
    myImage: {
      width: "300px",
    },
  },
});

const Veracruz = () => {
  const classes = useStyles();
  return (
    <Container fluid className={classes.myContainer}>
      <Hero image={veracruz} title="Veracruz, Mexico" />
      <Row className={classes.myRow}>
        <Col
          style={{ paddingBottom: "3vh" }}
          className={classes.myCol}
          xs={12}
          md={12}
          lg={12}
        >
          <div style={{ textAlign: "center" }}>
            <h1>Directions</h1>
            <p>Direcciones para llegar a Veracruz</p>
            <img className={classes.myImage} alt="mapa" src={mapa} />
          </div>
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <CardBasic align={true} title="Ceremony" text={lorem} />
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <CardBasic align={true} title="Ceremony" text={lorem} />
        </Col>
      </Row>
      <Hero image={hotel} title="Where to stay" height="60vh" />
      <Row className={classes.myRow}>
        <Col
          style={{ paddingBottom: "3vh" }}
          className={classes.myCol}
          xs={12}
          md={12}
          lg={12}
        >
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div style={{ textAlign: "center" }}>
              <h2>
                We provide a special price for wedding guests at the Grand
                Fiesta Americana Veracruz
              </h2>
              <p>Link/codigo de descuento</p>
            </div>
          </ScrollAnimation>
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <CardBasic align={true} title="Hotel Info" text={lorem} />
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <CardBasic align={true} title="Hotel Directions" text={lorem} />
        </Col>
      </Row>
      <Hero image={hotel2} title="What to do" height="60vh" />
      <Row className={classes.myRow}>
        <Col
          style={{ paddingBottom: "3vh" }}
          className={classes.myCol}
          xs={12}
          md={12}
          lg={12}
        >
          <h2 style={{ textAlign: "center" }}>
            You'll find plenty of activities and amazing food to try in
            Veracruz!
          </h2>
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <ScrollAnimation
            delay={500}
            animateIn="slideInRight"
            animateOnce={true}
          >
            <CardBasic
              height="300px"
              mheight="200px"
              image={ver1}
              title="Visit"
              text={lorem}
            />
          </ScrollAnimation>
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <ScrollAnimation
            delay={1000}
            animateIn="slideInRight"
            animateOnce={true}
          >
            <CardBasic
              height="300px"
              mheight="200px"
              image={ver2}
              title="Explore"
              text={lorem}
            />
          </ScrollAnimation>
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <ScrollAnimation
            delay={1500}
            animateIn="slideInRight"
            animateOnce={true}
          >
            <CardBasic
              height="300px"
              mheight="200px"
              image={ver3}
              title="Enjoy"
              text={lorem}
            />
          </ScrollAnimation>
        </Col>
      </Row>
    </Container>
  );
};

export default Veracruz;
