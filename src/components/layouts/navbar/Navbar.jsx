import "./navbar.css";

//import logo from "../../../assets/image-logo.png";
//import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Button, Container, CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ComputerIcon from "@mui/icons-material/Computer";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem key={"Todas"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Todas"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Computadoras"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ComputerIcon />
            </ListItemIcon>
            <ListItemText primary={"Computadoras"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Perifericos"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <KeyboardIcon />
            </ListItemIcon>
            <ListItemText primary={"Perifericos"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Componentes"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DeveloperBoardIcon />
            </ListItemIcon>
            <ListItemText primary={"Componentes"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Carrito"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary={"Carrito"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <CssBaseline />
          <Container maxWidth="sm">
            <img
              src="https://res.cloudinary.com/deigdy0bj/image/upload/v1736913412/Logo-Image_l5r2ls.webp"
              alt=""
              style={{ maxHeight: 40, marginTop: "20px" }}
            />
          </Container>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ backgroundColor: "green" }}>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ fontSize: 40, color: "white" }} />
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
    </>
  );
};

{
  /* <img src={logo} alt="" /> */
}
{
  /*       <nav className="navbar-container">
        <img
          src="https://res.cloudinary.com/deigdy0bj/image/upload/v1736893909/image-logo_tuuadh.png"
          alt=""
        />
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
      </nav> */
}
