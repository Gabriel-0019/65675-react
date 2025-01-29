import { useState } from "react";
import { products } from "../../../product";
import { ProductCard } from "../../common/productCard/productCard";
import { useEffect } from "react";
import { Container, CssBaseline, Grid2 } from "@mui/material";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  //simular una peticion que me devuelva productos
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let productsFiltered;

    if (name) {
      productsFiltered = products.filter(
        (element) => element.category === name
      );
    }
    
    const getProducts = new Promise((resolve, reject) => {
      const isLogged = true;

      if (isLogged) {
        resolve(!name ? products : productsFiltered);
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
  }, [name]);

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
