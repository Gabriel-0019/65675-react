import {
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid2,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import "./Checkout.css";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

const Checkout = () => {
  const { cart, getTotalAmount, removeCart } = useContext(CartContext);
  const [ticketNumber, setTicketNumber] = useState(null);
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const comprar = (event) => {
    event.preventDefault();
    console.log(userInfo);

    //crear una orden de compra en firestore
    let order = {
      buyer: userInfo,
      items: cart,
      total: getTotalAmount(),
    };

    let ordersCollection = collection(db, "orders");
    const newOrder = addDoc(ordersCollection, order);
    newOrder
      .then((res) => {
        setTicketNumber(res.id);
        removeCart();
      })
      .catch((error) => console.log(error));

    let productsCollections = collection(db, "products");

    order.items.forEach((element) => {
      let refDoc = doc(productsCollections, element.id);
      updateDoc(refDoc, { stock: element.stock - element.quantity });
    });
  };

  const capturarDatos = (event) => {
    const { value, name } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="div-main">
      <CssBaseline />
      <Container fixed>
        {ticketNumber ? (
          <h1>Tu comprobantee es {ticketNumber}</h1>
        ) : (
          <form onSubmit={comprar}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <TextField
                label="Nombre"
                name="nombre"
                variant="standard"
                className="text-field"
                onChange={capturarDatos}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <TextField
                label="Teléfono"
                name="telefono"
                variant="standard"
                className="text-field"
                onChange={capturarDatos}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <TextField
                label="Email"
                name="email"
                variant="standard"
                className="text-field"
                onChange={capturarDatos}
              />
            </FormControl>
            <Grid2 container justifyContent="center">
              <Button
                type="submit"
                variant="contained"
                color="success"
                style={{ marginTop: "20px" }}
              >
                Comprar
              </Button>
            </Grid2>
          </form>
        )}
      </Container>
    </div>
  );
};

export default Checkout;
