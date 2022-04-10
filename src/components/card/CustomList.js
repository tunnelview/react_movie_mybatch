import React from "react";
import { Card, Button } from "react-bootstrap";
// import {CustomList} from "../card/CustomList";

export const CustomList = ({ movieObj, func, btnDelete = false }) => {
  // console.log(movieObj);
  return (
    <Card style={{ width: "100%" }} className="mt-5 me-3 d-flex flex-row">
      <Card.Img
        variant="top"
        src={movieObj.Poster}
        style={{ width: "150px" }}
      />
      <Card.Body>
        <Card.Title>{movieObj.Title}</Card.Title>
        <Card.Title>Rating : {movieObj.imdbRating}</Card.Title>

        <p>{movieObj.Plot}</p>
        {/* should be list */}
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
