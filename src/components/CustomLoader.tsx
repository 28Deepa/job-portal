import { Box, CircularProgress, Container } from "@mui/material";

const CustomLoader = () => {
  return (
    <Container>
      <Box display="flex" alignSelf="center" justifyContent="center">
        <CircularProgress />
      </Box>
    </Container>
  );
};

export default CustomLoader;
