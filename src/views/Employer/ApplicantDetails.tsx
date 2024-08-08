import React from "react";
import { Typography, Link, Stack } from "@mui/material";

interface Freelancer {
  name: string;
  email: string;
  contact_no: string;
  skills: string[];
  github_profile: string;
  projects: string[];
}

interface ApplicantDetailsProps {
  freelancer: Freelancer;
}

const ApplicantDetails: React.FC<ApplicantDetailsProps> = ({ freelancer }) => {
  return (
    <Stack spacing={2}>
      <Typography variant="h6">Freelancer Details</Typography>
      <Typography variant="subtitle1">
        <strong>Name:</strong> {freelancer?.name}
      </Typography>
      <Typography variant="subtitle1">
        <strong>Email:</strong> {freelancer?.email}
      </Typography>
      <Typography variant="subtitle1">
        <strong>Contact No:</strong> {freelancer.contact_no}
      </Typography>
      <Typography variant="subtitle1">
        <strong>Skills:</strong> {freelancer?.skills.join(", ")}
      </Typography>
      <Typography variant="subtitle1">
        <strong>GitHub Profile:</strong>
        <Link href={freelancer.github_profile} target="_blank" rel="noopener">
          {freelancer.github_profile}
        </Link>
      </Typography>
      <Typography variant="subtitle1">
        <strong>Projects:</strong>
      </Typography>
      <ul>
        {freelancer?.projects
          ? freelancer.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))
          : ""}
      </ul>
    </Stack>
  );
};

export default ApplicantDetails;
