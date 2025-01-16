import { Box, Typography } from "@mui/material";
import "./footer.css";
export const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 2,
        textAlign: "center",
        backgroundColor: "green",
        mt: "auto",
      }}
      
    >
      <Typography variant="body1">
        © 2025 Este es mi footer.
      </Typography>
    </Box>
  );
};
