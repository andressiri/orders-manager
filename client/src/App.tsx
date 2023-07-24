import { Routes, Route } from "react-router-dom";
import { Container } from "./styles/styledComponents";
import { ITEMS_ROUTE, ORDERS_ROUTE } from "./config/constants";
import { Header, ItemsPage, LandingPage, OrdersPage } from "./components";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path={`/${ORDERS_ROUTE}`} element={<OrdersPage />} />
        <Route path={`/${ITEMS_ROUTE}`} element={<ItemsPage />} />
      </Routes>
    </Container>
  );
}

export default App;
