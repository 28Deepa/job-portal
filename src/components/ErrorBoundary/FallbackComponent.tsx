import { StyledBox } from "../../global.styled";
import { Button } from "@mui/material";

const FallbackComponent = () => {
  const handleTryAgain = () => {
    window.location.reload();
  };

  return (
    <StyledBox>
      <h1>It's not you. It's us!</h1>
      <p>Give it a few minutes, then try again.</p>
      <Button
        color="primary"
        variant="outlined"
        sx={{ mt: 2 }}
        onClick={handleTryAgain}
      >
        Try again
      </Button>
    </StyledBox>
  );
};

export default FallbackComponent;
