import "./App.css";
import { Container } from "react-bootstrap";
import { Title } from "./components/title/Title";
import { SearchForm } from "./components/search-form/SearchForm";
import { CustomCard } from "./components/card/CustomCard";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm />
        <CustomCard />
        <hr />
      </Container>
    </div>
  );
}

export default App;
