import React, { useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const MovieList = ({ movieList }) => {
  const [mood, setMood] = useState("");

  //filter first then display
  const filterMovies = mood
    ? movieList.filter((movie) => movie.category === mood)
    : movieList;

  return (
    <div className="py-3">
      <Row>{mood.toUpperCase || "All"} is selected</Row>
      <Row>
        <Col className="d-flex justify-content-between mt-3">
          <ButtonGroup>
            <Button variant="primary" onClick={() => setMood("")}>
              All
            </Button>
            <Button variant="info" onClick={() => setMood("happy")}>
              Happy
            </Button>
            <Button variant="warning" onClick={() => setMood("lazy")}>
              Lazy
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="primary">Grid</Button>
            <Button variant="info">List</Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex flex-wrap justify-content-around">
          {movieList.map((movie, i) => (
            <CustomCard key={i} movieObj={movie} />
          ))}
        </Col>
      </Row>
    </div>
  );
};
