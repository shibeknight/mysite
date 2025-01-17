import React from "react";
import { createUseStyles } from "react-jss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import CardBasic from "../components/CardBasic";
import ScrollAnimation from "react-animate-on-scroll";
import veracruz from "../assets/veracruz/9.jpeg";
import ver1 from "../assets/veracruz/12.jpeg";
import ver2 from "../assets/veracruz/11.jpeg";
import ver3 from "../assets/veracruz/3.jpeg";
import hotel from "../assets/veracruz/hotel.jpeg";
import hotel2 from "../assets/veracruz/hotel2.jpeg";

let texto = require("../assets/texto.json");

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
  links: {
    color: "rgb(69, 95, 75)",
    textDecoration: "none",
    verticalAlign: "middle",
    "&:hover": {
      color: "rgb(69, 95, 75)",
      textDecoration: "none",
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
            <h1>Sobre Veracruz</h1>
          </div>
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <CardBasic
              align={true}
              title="History"
              text={texto.veracruzText1}
            />
          </ScrollAnimation>
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            <CardBasic
              align={true}
              title="Culture"
              text={texto.veracruzText2}
            />
          </ScrollAnimation>
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
              <h1>
                Tenemos algunas opciones de hospedaje que te pueden interesar:
              </h1>
              {/* <h4>
                <ScrollAnimation
                  delay={1000}
                  animateIn="bounceIn"
                  animateOnce={true}
                >
                  <a
                    href={documento}
                    className={classes.links}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineFilePdf title="Documento" size="3rem" />
                    <h6>Descargar</h6>
                  </a>
                </ScrollAnimation>
              </h4> */}
            </div>
          </ScrollAnimation>
        </Col>
        {/* <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <CardBasic
              align={true}
              title="Grand Fiesta Americana"
              text="Su ubicación es perfecta para gozar del Puerto. Accesibilidad al aeropuerto, a importantes centros comerciales y al World Trade Center. En su interior: majestuosas albercas, Sabores de México, Spa y espacios esculturales."
            />
          </ScrollAnimation>
        </Col> */}
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            <CardBasic
              align={true}
              title="Alojamiento"
              text={
                <div>
                  <h5 style={{ textAlign: "center" }}>
                    Te recomendamos las siguientes opciones:
                  </h5>
                  <ul
                    style={{
                      listStyleType: "none",
                      textAlign: "center",
                      paddingInlineStart: "inherit",
                    }}
                  >
                    <li>Hotel Rivoli </li>
                    <li>Hotel Camino Real</li>
                    <li>Hotel Indigo</li>
                    <li>Hotel Gran Plaza</li>
                  </ul>
                </div>
              }
            />
          </ScrollAnimation>
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
          <h1 style={{ textAlign: "center" }}>
            Este hermoso puerto tiene muchas actividades y experiencias que
            ofrecerte.
          </h1>
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
              text={texto.veracruzVisit}
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
              image={ver3}
              title="Explore"
              text={texto.veracruzExplore}
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
              image={ver2}
              title="Enjoy"
              text={texto.veracruzEnjoy}
            />
          </ScrollAnimation>
        </Col>
      </Row>
    </Container>
  );
};

export default Veracruz;
