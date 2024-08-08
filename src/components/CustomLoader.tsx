import { Box, CircularProgress, Container } from "@mui/material";

const CustomLoader = () => {
  return (
    <Container>
      <Box
        display="flex"
        alignSelf="center"
        justifyContent="center"
        sx={{ mt: 16 }}
      >
        <CircularProgress />
      </Box>
    </Container>
  );
};

export default CustomLoader;
