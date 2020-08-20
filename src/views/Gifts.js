import React from "react";
import { createUseStyles } from "react-jss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import heropic from "../assets/heropic5.jpeg";

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
    display: 'flex',
    justifyContent: 'center',
  },
});

const Gifts = () => {
  const classes = useStyles();
  return (
    <Container fluid className={classes.myContainer}>
      <Hero
        image={heropic}
        title="Gifts"
        subtitle="Contribute to our plans for the future"
      />
      <Row className={classes.myRow}>
        <Col
          style={{
            paddingBottom: "3vh"
          }}
          className={classes.myCol}
          xs={8}
          md={8}
          lg={8}
        >
          <h2 style={{ textAlign: "center" }}>
            You don't have to bring us gifts, our home is now far from Veracruz
            and we can't take much with us. If you want to give us something, a
            contribution to our honeymoon fund and future plans as a family
            would be great!
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Gifts;
