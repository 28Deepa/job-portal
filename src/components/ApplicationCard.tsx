import { LoadingButton } from "@mui/lab";
import { Box, Chip, Grid, Typography } from "@mui/material";
import React from "react";

const ApplicationCard = (application: any) => {
  const { job_id } = application;
  const { name, email, contact_no } = application?.freelancer;
  return (
    <Box
      sx={{
        border: "1px solid #d3d3d3",
        borderRadius: "8px",
        padding: "1rem",
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2">{email}</Typography>
          <Typography variant="body2" color="text.secondary">
            {contact_no}
          </Typography>
          {/* {skills && <Box mt={1}>
            <Grid container spacing={1}>
              {skills.map((skill: string, index: number) => (
                <Grid item key={index}>
                  <Chip label={skill} />
                </Grid>
              ))}
            </Grid>
          </Box>} */}
        </Box>
        <Box justifyContent="flex-end">
          {/* <LoadingButton
            variant="contained"
            color="primary"
            size="small"
            sx={{ mt: "0.5rem" }}
            onClick={handleApplyJob}
            loading={loading && !error}
          >
            Quick Apply
          </LoadingButton> */}
          {/* <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 1 }}
          >
            <DoneOutlinedIcon color="primary" />
            <Typography color="primary">Applied</Typography>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default ApplicationCard;
