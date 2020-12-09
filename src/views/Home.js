import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScrollAnimation from "react-animate-on-scroll";
import CardBasic from "../components/CardBasic";
import sil3 from "../assets/sil3.jpeg";
import dan2 from "../assets/dan2.jpeg";
import sildan5 from "../assets/sildan5.jpg";
import hero from "../assets/heropic.jpeg";
import hero4 from "../assets/heropic4.jpeg";
import hero3 from "../assets/heropic3.jpeg";
import documento from "../assets/documents/Procedimiento de Operaciones de Banquetes.pdf";
import { AiOutlineFilePdf } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

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
  links: {
    color: "rgb(69, 95, 75)",
    textDecoration: "none",
    verticalAlign: "middle",
    "&:hover": {
      color: "rgb(69, 95, 75)",
      textDecoration: "none",
    },
  },
  mySpan: {
    display: "block",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Container fluid className={classes.myContainer}>
      <Hero
        image={hero}
        title="Silvana y Daniel"
        subtitle="November 28, 2020 - Veracruz, Mexico"
        cursive={true}
      />
      <Row className={classes.myRow}>
        <Col
          style={{ paddingBottom: "3vh" }}
          className={classes.myCol}
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <h1 style={{ textAlign: "center" }}>
              ¡Estamos muy felices al celebrar la unión de nuestras vidas, únete
              a nuestra alegría!
            </h1>
          </ScrollAnimation>
        </Col>
        <Col className={classes.myCol} xs={12} sm={12} md={4} lg={4}>
          <ScrollAnimation
            delay={500}
            animateIn="slideInRight"
            animateOnce={true}
          >
            <CardBasic image={sil3} title="Silvana" text={texto.silvanaText} />
          </ScrollAnimation>
        </Col>
        <Col className={classes.myCol} xs={12} sm={12} md={4} lg={4}>
          <ScrollAnimation
            delay={1000}
            animateIn="slideInRight"
            animateOnce={true}
          >
            <CardBasic image={dan2} title="Daniel" text={texto.danielText} />
          </ScrollAnimation>
        </Col>
        <Col className={classes.myCol} xs={12} sm={12} md={4} lg={4}>
          <ScrollAnimation
            delay={1500}
            animateIn="slideInRight"
            animateOnce={true}
          >
            <CardBasic image={sildan5} title="Us" text={texto.usText} />
          </ScrollAnimation>
        </Col>
      </Row>
      <Hero image={hero3} title="Covid Protocol" height="60vh" />
      <Row className={classes.myRow}>
        <Col
          style={{ paddingBottom: "3vh" }}
          className={classes.myCol}
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <div style={{ textAlign: "center" }}>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <h1>
                ¡Nos encantaría verte! Por ello, tenemos las siguientes
                recomendaciones para ti durante el evento.
              </h1>
            </ScrollAnimation>
          </div>
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <CardBasic
              align={true}
              title="Recomendaciones"
              text={
                <>
                  <h5 style={{ textAlign: "center" }}>
                    Si has experimentado malestares como:
                  </h5>
                  <ul
                    style={{
                      listStyleType: "none",
                      textAlign: "center",
                      paddingInlineStart: "inherit",
                    }}
                  >
                    <li>Tos</li>
                    <li>Fiebre</li>
                    <li>Ausencia de aire</li>
                  </ul>
                  <h5 style={{ textAlign: "center" }}>
                    Te recomendamos permanecer en casa y seguir la cobertura de
                    la boda a traves de Instagram.
                  </h5>
                  <div style={{ textAlign: "center" }}>
                    <a
                      href="https://www.instagram.com/silvanaydanielceballos/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineInstagram
                        className={classes.links}
                        size="2.5em"
                      />
                    </a>
                  </div>
                </>
              }
            />
          </ScrollAnimation>
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            <CardBasic
              align={true}
              title="Protocolo"
              text={
                <div style={{ textAlign: "center" }}>
                  <h5>
                    Es importante también que leas el protocolo anti Covid, que
                    se llevara acabo el día de la recepción.
                  </h5>
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
                </div>
              }
            />
          </ScrollAnimation>
        </Col>
      </Row>
      <Hero title="Wedding Day" height="70vh" image={hero4} />
      <Row className={classes.myRow}>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <CardBasic
              align={true}
              title="Ceremony"
              text={
                <div style={{ textAlign: "center" }}>
                  <span className={classes.mySpan}>Catedral de Veracruz</span>
                  <span className={classes.mySpan}>
                    Mario Molina 173, Centro, 91700
                  </span>
                  <span className={classes.mySpan}>Veracruz, Ver.</span>
                  <span className={classes.mySpan}>12:00 pm</span>
                </div>
              }
            />
          </ScrollAnimation>
        </Col>
        {/* <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            <CardBasic
              align={true}
              title="Reception"
              text={
                <div style={{ textAlign: "center" }}>
                  <span className={classes.mySpan}>
                    Hotel Fiesta Americana - Salon Costa de Oro{" "}
                  </span>
                  <span className={classes.mySpan}>
                    Prol, Blvd. Manuel Ávila Camacho s/n, Costa de Oro, 94299
                  </span>
                  <span className={classes.mySpan}>Boca del Río, Ver.</span>
                  <span className={classes.mySpan}>4:00 pm</span>
                </div>
              }
            />
          </ScrollAnimation>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Home;
