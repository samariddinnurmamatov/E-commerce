import HomeP from "./pages/HomeP";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CartP from "./pages/CartP";
// import Counter from "./components/Counter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeP />} />
          <Route path="cart" element={<CartP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
