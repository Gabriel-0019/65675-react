import { useContext, useState } from "react";
import "./counter.css";
import { CartContext } from "../../../context/CartContext";
import { Button, ButtonGroup } from "@mui/material";

export const Counter = ({ item }) => {
  const [contador, setContador] = useState(1); // --> []
  const { addToCart } = useContext(CartContext);
  const sumar = () => {
    if (contador < item.stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    let objCarrito = { ...item, quantity: contador };
    //logica para agregar carrito
    addToCart(objCarrito);
  };

  return (
    <div>
      <ButtonGroup variant="contained" aria-label="Group button counter">
        <Button onClick={restar} color="success">-</Button>
        <h2 style={{ marginLeft: "20px", marginRight: "20px" }}>{contador} </h2>
        <Button onClick={sumar} color="success">+</Button>
      </ButtonGroup>
      <br/>
      <Button style={{ marginTop: "10px"}} color="success" onClick={onAdd} variant="contained">Agregar al carrito</Button>
    </div>
  );
};
