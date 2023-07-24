import { Routes, Route } from "react-router-dom";
import { Container } from "./styles/styledComponents";
import { ITEMS_ROUTE, ORDERS_ROUTE } from "./config/constants";
import { Header } from "./components";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Landing page</h1>} />
        <Route path={`/${ORDERS_ROUTE}`} element={<h1>Orders page</h1>} />
        <Route path={`/${ITEMS_ROUTE}`} element={<h1>Items page</h1>} />
      </Routes>
    </Container>
  );
}

export default App;
