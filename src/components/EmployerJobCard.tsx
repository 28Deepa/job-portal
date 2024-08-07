import { Box, Chip, Grid, Typography } from "@mui/material";
import React from "react";

interface IJob {
  job_title: string;
  company_name: string;
  salary_per_hour: string;
  skills: string[];
  created_at: string;
}

const EmployerJobCard = (job: any) => {
  console.log("job", job);
  const { job_title, company_name, salary_per_hour, skills, created_at } =
    job.job;
  return (
    <Box
      sx={{
        border: "1px solid #d3d3d3",
        borderRadius: "8px",
        padding: "1rem",
      }}
    >
      <Typography component="div">{job_title}</Typography>
      <Typography variant="body2">{company_name}</Typography>
      <Typography variant="body2" color="text.secondary">
        {salary_per_hour}
      </Typography>
      <Box mt={1}>
        <Grid container spacing={1}>
          {skills.map((skill: string, index: number) => (
            <Grid item key={index}>
              <Chip label={skill} />
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* <Typography variant="caption" color="text">
        Posted on: {new Date(created_at).toLocaleDateString()}
      </Typography> */}
    </Box>
  );
};

export default EmployerJobCard;
