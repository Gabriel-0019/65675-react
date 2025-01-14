import "./navbar.css";

import logo from "../../../assets/image-logo.png";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <img src={logo} alt="" />
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <li style={{ listStyle: "none" }}>Todas</li>
        <li style={{ listStyle: "none" }}>Computadoras</li>
        <li style={{ listStyle: "none" }}>Perifericos</li>
        <li style={{ listStyle: "none" }}>Componentes</li>
      </ul>
      <CartWidget />
    </nav>
  );
};