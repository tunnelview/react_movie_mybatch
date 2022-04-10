import React from "react";
import { Card, Button } from "react-bootstrap";

export const CustomCard = ({ movieObj, func, btnDelete = false }) => {
  console.log(movieObj);
  return (
    <Card style={{ width: "18rem" }} className="mt-5 me-3">
      <Card.Img variant="top" src={movieObj.Poster} />
      <Card.Body>
        <Card.Title>{movieObj.Title}</Card.Title>
        <Card.Title>Rating : {movieObj.imdbRating}</Card.Title>

        {btnDelete ? (
          <div className="d-grid gap-2">
            <Button
              variant="danger"
              size="lg"
              onClick={() => func(movieObj.imdbID)}
            >
              Delete
            </Button>
          </div>
        ) : (
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
        )}
      </Card.Body>
    </Card>
  );
};
