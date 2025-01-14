
import { Navbar } from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/itemListContainer";
import { Footer } from "./components/layouts/footer/Footer";

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer tituloPrincipal="Mi título"/>
      <Footer />
    </div>
  )
}

export default App
