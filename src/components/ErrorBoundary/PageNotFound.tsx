import React from "react";
import { Typography } from "@mui/material";
import { StyledBox } from "../../global.styled";

const PageNotFound = () => {
  return (
    <StyledBox>
      <Typography variant="h5">No matching route found!</Typography>
    </StyledBox>
  );
};

export default PageNotFound;
