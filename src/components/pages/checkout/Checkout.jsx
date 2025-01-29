import {
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid2,
  TextField,
} from "@mui/material";
import { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const comprar = (event) => {
    event.preventDefault();
    console.log("Compreé");
    console.log(userInfo);
  };

  const capturarDatos = (event) => {
    //console.log(event);
    const { value, name } = event.target;
    //console.log(value);
    //console.log(name);
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="div-main">
      <CssBaseline />
      <Container fixed>
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
      </Container>
    </div>
  );
};

export default Checkout;
