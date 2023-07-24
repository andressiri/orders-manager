import { Routes, Route } from "react-router-dom";
import { Container } from "./styles/styledComponents";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<h1>Landing page</h1>} />
        <Route path="/orders" element={<h1>Orders page</h1>} />
      </Routes>
    </Container>
  );
}

export default App;
