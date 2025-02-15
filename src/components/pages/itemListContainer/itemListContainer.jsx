import { useState } from "react";
//import { products } from "../../../product";
import { ProductCard } from "../../common/productCard/productCard";
import { useEffect } from "react";
import { Container, CssBaseline, Grid2 } from "@mui/material";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Loading } from "../../common/loading/Loading";
//import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = (props) => {
  //simular una peticion que me devuelva productos
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let productsColletion = collection(db, "products");

    let consulta = productsColletion;
    if (name) {
      let porcionColletion = query(
        productsColletion,
        where("category", "==", name)
      );

      consulta = porcionColletion;
    }

    const getProducts = getDocs(consulta);

    getProducts
      .then((res) => {
        const array = res.docs.map((element) => {
          return { id: element.id, ...element.data() };
        });

        setItems(array);
      })
      .catch((error) => console.log(error));
  }, [name]);

  //If con return temprano
  /*   if ( items.length === 0 ) {
    return <h1>Cargando...</h1>
  } */

  /*   const agregarProductos = () => {
    let productsColletion = collection( db, "products");

    products.forEach(element => {
    addDoc( productsColletion, element)
    });
  } */

  return (
    <>
      <h2 className="title">{props.tituloPrincipal}</h2>
      {items.length === 0 ? (
        <Loading />
      ) : (
        <div>
          {/* <button onClick={agregarProductos}>Agregar productos</button> */}
          <CssBaseline />
          <Container fixed>
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
      )}
    </>
  );
};

export default ItemListContainer;
