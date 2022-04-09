import React from "react";
import { Card, Button} from "react-bootstrap";

export const CustomCard = () => {
  return (
    <Card style={{ width: "18rem" }} className="mt-5">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>

        <div className="d-flex.justify-content-around">

        <Button variant="Info">Go somewhere</Button>
        <Button variant="Secondary">Go somewhere</Button>
        <div />
      </Card.Body>
    </Card>
  );
};
