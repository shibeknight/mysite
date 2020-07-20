import React from "react";
import { createUseStyles } from "react-jss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const useStyles = createUseStyles({
  myContainer: {
    border: 'solid'
  },
});

const Home = () => {
  const classes = useStyles()
  return (
    <div>
      <Container className={classes.myContainer}>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
