import { useState } from "react";
import { products } from "../../../product";
import { ProductCard } from "../../common/productCard/productCard";
import { useEffect } from "react";
import { Container, CssBaseline, Grid2 } from "@mui/material";
import "./itemListContainer.css";

const ItemListContainer = (props) => {
  //simular una peticion que me devuelva productos
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Soy el effect");
    const getProducts = new Promise((resolve, reject) => {
      const isLogged = true;

      if (isLogged) {
        resolve(products);
      } else {
        reject({ statusCode: 400, message: "algo salio todo mal" });
      }
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log("se ejecuta el catch");
        console.log(error);
      })
      .finally(() => {});
  }, []);

  console.log("no soy el effect");

  return (
    <div>
      <CssBaseline />
      <Container fixed>
        <h2 className="title">{props.tituloPrincipal}</h2>
        <Grid2 container spacing={2}>
          {items.map((elemento) => {
            return (
              <Grid2 xs={12} sm={6} md={4} key={elemento.id}>
                <ProductCard key={elemento.id} {...elemento} />
              </Grid2>
            );
          })}
        </Grid2>
      </Container>
    </div>

  );
};

export default ItemListContainer;
