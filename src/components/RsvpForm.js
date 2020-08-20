import React from "react";
import { createUseStyles } from "react-jss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const useStyles = createUseStyles({
  myCol: {
    // display: "flex",
    // justifyContent: "center",
    padding: "10px",
  },
  myRow: {
    paddingTop: "4.2vh",
    paddingBottom: "4.2vh",
    paddingRight: "15vw",
    paddingLeft: "15vw",
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "center",
  },
  myLabel: {
    fontWeight: "bold",
  },
});

const RsvpForm = () => {
  const classes = useStyles();
  return (
    <Form>
      <Row className={classes.myRow}>
        <Col xs={12} sm={12} md={12} lg={12} className={classes.myCol}>
          <Form.Label className={classes.myLabel}>Email address</Form.Label>
          <Form.Control type="email" placeholder="someone@mail.com" />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className={classes.myCol}>
          <Form.Control type="input" placeholder="First name" />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className={classes.myCol}>
          <Form.Control type="input" placeholder="Last name" />
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} className={classes.myCol}>
          <Form.Label className={classes.myLabel}>
            Will you be there?
          </Form.Label>
          <Form.Control as="select">
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} className={classes.myCol}>
          <Form.Label className={classes.myLabel}>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className={classes.myCol}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            style={{ fontWeight: "bold", width: "40%" }}
            variant="outline-success"
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default RsvpForm;
