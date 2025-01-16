//import { Counter } from "./components/common/counter/Counter";
import ItemListContainer from "./components/pages/itemListContainer/itemListContainer";
import { Footer } from "./components/layouts/footer/Footer";
import { Navbar } from "./components/layouts/navbar/NavBar";

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
      {/* <Counter /> */}
      <Navbar />
      <ItemListContainer tituloPrincipal="Mi título" />
      <Footer />
    </div>
  );
}

export default App;
