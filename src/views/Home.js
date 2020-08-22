import React from "react";
import { createUseStyles } from "react-jss";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScrollAnimation from "react-animate-on-scroll";
import CardBasic from "../components/CardBasic";
import sil3 from "../assets/sil3.jpg";
import dan2 from "../assets/dan2.jpg";
import sildan5 from "../assets/sildan5.jpg";
import hero from "../assets/heropic.jpeg";
import hero4 from "../assets/heropic4.jpeg";
import hero3 from "../assets/heropic3.jpeg";
import documento from "../assets/documents/Procedimiento de Operaciones de Banquetes.pdf";

let texto = require("../assets/texto.json");
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper velit ac nibh scelerisque efficitur. Integer pretium sodales cursus. Maecenas id aliquet nunc. Phasellus vestibulum arcu sit amet mi feugiat congue. Vivamus faucibus aliquet felis eu efficitur. Nullam ac nulla sed urna porttitor laoreet id quis ante.";

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
          md={12}
          lg={12}
        >
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <h1 style={{ textAlign: "center" }}>
              ¡Estamos muy felices al celebrar la union de nuestras vidas, Únete
              a nuestra alegría!
            </h1>
          </ScrollAnimation>
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <ScrollAnimation
            delay={500}
            animateIn="slideInRight"
            animateOnce={true}
          >
            <CardBasic image={sil3} title="Silvana" text={texto.silvanaText} />
          </ScrollAnimation>
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <ScrollAnimation
            delay={1000}
            animateIn="slideInRight"
            animateOnce={true}
          >
            <CardBasic image={dan2} title="Daniel" text={texto.danielText} />
          </ScrollAnimation>
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
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
          md={12}
          lg={12}
        >
          <div style={{ textAlign: "center" }}>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <h2>Nos encantaría verte</h2>
            </ScrollAnimation>
            {/* <h4>
                <a href={documento} rel="noopener noreferrer" target="_blank">
                  Documento
                </a>
              </h4> */}
          </div>
        </Col>
      </Row>
      <Hero title="Wedding Day" height="70vh" image={hero4} />
      <Row className={classes.myRow}>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <CardBasic align={true} title="Ceremony" text={lorem} />
        </Col>
        <Col className={classes.myCol} xs={12} md={4} lg={4}>
          <CardBasic align={true} title="Reception" text={lorem} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
