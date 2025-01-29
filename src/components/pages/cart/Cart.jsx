import { Button, Container, CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = () => {
  return (
    <div className="div-main">
      <CssBaseline />
      <Container fixed>
        <Link to={"/checkout"} style={{ color: "#fff" }}>
          <Button size="small" color="success" variant="contained">
            Finalizar compra
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default Cart;
