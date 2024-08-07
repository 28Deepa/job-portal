import { Box, Chip, Grid, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React from "react";
import { useMutation } from "@apollo/client";
// import { APPLY_FOR_JOB } from "../graphql/mutations";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { APPLY_FOR_JOB } from "../graphql/freelancer/mutations";
import { useSelector } from "react-redux";

interface IJob {
  job_title: string;
  company_name: string;
  salary_per_hour: string;
  skills: string[];
}

const ApplicantJobCard = (job: any) => {
  const { id, job_title, company_name, salary_per_hour, skills, employer_id } =
    job.job;

  const { loggedInUserData } = useSelector((state: any) => state.AuthReducer);
  console.log(loggedInUserData.id);

  const [applyForJob, { loading, error, data }] = useMutation(APPLY_FOR_JOB);

  const handleApplyJob = async () => {
    const payload = {
      job_id: id,
      freelancer_id: loggedInUserData.id,
      employer_id: employer_id,
    };
    console.log("payload", payload);

    try {
      const { data } = await applyForJob({
        variables: {
          object: payload,
        },
      });

      console.log({ data });
      alert("Application submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to submit application.");
    }
  };

  console.log({ data });

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
          <Typography variant="h6">{job_title}</Typography>
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
        </Box>
        <Box justifyContent="flex-end">
          <LoadingButton
            variant="contained"
            color="primary"
            size="small"
            sx={{ mt: "0.5rem" }}
            onClick={handleApplyJob}
            loading={loading && !error}
          >
            Quick Apply
          </LoadingButton>
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

export default ApplicantJobCard;
