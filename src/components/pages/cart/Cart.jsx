import { Button, ButtonGroup, Container, CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
//import { useState } from "react";

const Cart = () => {
  const { cart, removeCart, removedById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  return (
    <div className="div-main">
      <CssBaseline />
      <Container fixed>
        {cart.map((product) => {
          return (
            <div
              key={product.id}
              style={{
                border: "1px solid green",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: "wrap",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={product.imageUrl}
                  alt=""
                  style={{ maxWidth: "100px" }}
                />
                <h2>{product.title}</h2>
                <h2>Precio: ${product.price}</h2>
                <h2>Cantidad: {product.quantity}</h2>
              </div>
              <h2>Total: ${product.quantity * product.price}</h2>
              <Button
                color="error"
                variant="contained"
                onClick={() => removedById(product.id)}
              >
                Eliminar
              </Button>
            </div>
          );
        })}
        <h1 style={{ color: "#fff" }}>Total a pagar: ${total}</h1>
        <ButtonGroup variant="contained" aria-label="Group button counter">
          <Button
            size="small"
            color="success"
            variant="contained"
            onClick={removeCart}
          >
            Limpiar carrito
          </Button>
          {cart.length > 0 && (
            <Link
              to={"/checkout"}
              style={{ color: "#fff", marginLeft: "10px" }}
            >
              <Button size="small" color="success" variant="contained">
                Finalizar compra
              </Button>
            </Link>
          )}
        </ButtonGroup>
      </Container>
    </div>
  );
};

export default Cart;
