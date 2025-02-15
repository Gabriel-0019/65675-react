import { Box, CircularProgress, Typography } from "@mui/material";

export const Loading = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    minHeight="50vh"
  >
    <CircularProgress />
    <Typography variant="h4" sx={{ mt: 2, color: "#fff" }}>
      Cargando...
    </Typography>
  </Box>
);
