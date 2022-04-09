import React from "react";
import { Col, Row, Form } from "react-bootstrap";

export const SearchForm = () => {
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
      </Form>
    </div>
  );
};
