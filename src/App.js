import { Container, Row } from "react-bootstrap";
import "./App.css";
import { Title } from "./components/title/Title";
import { SearchForm } from "./components/search-form/SearchForm";
import { CustomCard } from "./components/card/CustomCard";
import { MovieList } from "./components/movie-list/MovieList";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm />
        <CustomCard />
        <hr />
        <MovieList />
      </Container>
    </div>
  );
}

export default App;
