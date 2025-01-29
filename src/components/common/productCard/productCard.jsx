import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export const ProductCard = ({ imageUrl, title, price, description, id }) => {
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
          <Link to={`/detail/${id}`}>
            <Button size="small" color="success" variant="contained">
              Ver detalle
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};
