import "./App.css";
import { Container } from "react-bootstrap";
import { Title } from "./components/title/Title";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Title />
      </Container>
    </div>
  );
}

export default App;
