import { Box, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface IJob {
  job_title: string;
  company_name: string;
  salary_per_hour: string;
  skills: string[];
  created_at: string;
}

const EmployerJobCard = (job: any) => {
  const { id, job_title, company_name, salary_per_hour, skills, applications } =
    job.job;

  const navigate = useNavigate();

  const applicationCount = applications ? applications.length : 0;
  const handleApplicationsClick = () => {
    navigate(`/jobs/${id}/applications`);
  };

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

      <Typography
        variant="body2"
        color="text"
        sx={{ mt: 2, cursor: "pointer" }}
        onClick={handleApplicationsClick}
      >
        Applications {applicationCount}
      </Typography>
    </Box>
  );
};

export default EmployerJobCard;
