import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
// import { GET_APPLICATIONS_BY_JOB_ID } from "../graphql/queries";
import { Box, CircularProgress, Typography } from "@mui/material";
import { GET_APPLICATIONS_BY_JOB_ID } from "../graphql/employer/queries";

const JobApplications = () => {
  const { id } = useParams();

  const {
    data: applicationData,
    loading: applicationDataLoading,
    error: applicationDataError,
  } = useQuery(GET_APPLICATIONS_BY_JOB_ID, {
    variables: {
      job_id: id,
    },
  });

  if (applicationDataLoading) return <CircularProgress />;

  if (applicationDataError)
    return <Box>Error: {applicationDataError.message}</Box>;

  console.log({ applicationData });

  return (
    applicationData && (
      <Box>
        <Typography>{}</Typography>
      </Box>
    )
  );
};

export default JobApplications;
