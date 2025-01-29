import { useEffect, useState } from "react";
import { products } from "../../../product";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  CssBaseline,
  Grid2,
  Modal,
  Typography,
} from "@mui/material";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import "./itemDetail.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams(); // Simpre devuelve un objeto
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    let productSelected = products.find((product) => product.id === id);
    console.log(productSelected);

    productSelected ? setItem(productSelected) : setOpen(true);
  }, [id]);

  return (
    <div className="div-main">
      <CssBaseline />
      <Container fixed>
        <Grid2 container spacing={4}>
          <Grid2 xs={6} sm={6} md={4}>
            <img src={item.imageUrl} alt="" style={{ maxWidth: "300px" }} />
          </Grid2>
          <Grid2 xs={6} sm={6} md={4}>
            <h2>{item.title}</h2>
            <h3>Precio: ${item.price}</h3>
            <p>Descripción: {item.description}</p>
            <h5>Stock: {item.stock}</h5>
          </Grid2>
        </Grid2>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SentimentVeryDissatisfiedOutlinedIcon
              sx={{ fontSize: 40, color: "error.main" }}
            />
          </div>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="typographyModal"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Error!
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
            className="typographyModal"
          >
            Ocurrió un error al buscar el producto
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ItemDetail;
