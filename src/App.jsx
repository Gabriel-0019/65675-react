import ItemListContainer from "./components/pages/itemListContainer/itemListContainer";
import { Footer } from "./components/layouts/footer/Footer";
import { Navbar } from "./components/layouts/navbar/Navbar";
import ItemDetail from "./components/pages/itemDetail/itemDetail";
//import { Country } from "./components/common/Country/Country";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";
import Error404 from "./components/pages/Error404/Error404";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#212020",
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer tituloPrincipal="Productos" />}
          />
          <Route
            path="/category/:name"
            element={<ItemListContainer tituloPrincipal="Productos filtrados" />}
          />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/detail/:id" element={<ItemDetail />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
