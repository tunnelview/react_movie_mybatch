import React from "react";
import { Card, Button } from "react-bootstrap";

export const CustomCard = ({ searchedMovie, func }) => {
  return (
    <Card style={{ width: "18rem" }} className="mt-5">
      <Card.Img variant="top" src={searchedMovie.Poster} />
      <Card.Body>
        <Card.Title>{searchedMovie.Title}</Card.Title>
        <Card.Title>Rating : {searchedMovie.imdbRating}</Card.Title>

        <div className="d-flex.justify-content-around">
          <Button variant="info" onClick={() => func("happy")}>
            {" "}
            Be Happy
          </Button>
          <Button variant="secondary" onClick={() => func("lazy")}>
            {" "}
            Lazy Bee{" "}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
