import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const ProductCard = ({ imageUrl, title, price, description }) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          minHeight: 150,
          maxHeight: 430,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia sx={{ height: 100 }} image={imageUrl} title={title} />
        <CardContent sx={{ overflowY: "auto", flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            $ {price}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description.split("\n").map((line, index) => (
              <Box key={index} component="span" display="block">
                {line}
              </Box>
            ))}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="success" variant="contained">
            Ver detalle
          </Button>
        </CardActions>
      </Card>
      {/* <Box border="1px solid black">
      <img src={imageUrl} alt=""></img>
      <h2>{title}</h2>
      <h2>{price}</h2>
      <h2>{description} </h2>
      <Button color="success" variant="contained" loading={true}>
        Ver detalle
      </Button>
    </Box> */}
    </>
  );
};
