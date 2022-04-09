import React from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";

export const MovieList = () => {
  return (
    <div className="">
      <Row>
        <Col>All List is selected</Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-between">
          <ButtonGroup>
            <Button variant="primary">All</Button>
            <Button variant="info">Happy</Button>
            <Button variant="warning">Lazy</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="primary">Grid</Button>
            <Button variant="info">List</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
};
