import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import React from "react";
import { FREELANCER_DETAILS_BY_ID } from "../../graphql/freelancer/queries";
import { useQuery } from "@apollo/client";
import CustomModal from "../CustomModal";
import ApplicantDetails from "../../views/Employer/ApplicantDetails";

const ApplicationCard = (application: any) => {
  const applicantData = application?.job?.freelancer;
  const [showProfileModal, setShowProfileModal] = React.useState(false);

  const { data } = useQuery(FREELANCER_DETAILS_BY_ID, {
    variables: {
      freelancer_id: applicantData?.id,
    },
  });

  const { name, email, contact_no } = applicantData;
  return (
    <Box
      sx={{
        border: "1px solid #d3d3d3",
        borderRadius: "8px",
        padding: "1rem",
      }}
    >
      <Box display="flex" justifyContent="space-between">
        {showProfileModal && (
          <CustomModal
            isOpen={showProfileModal}
            onClose={() => setShowProfileModal(false)}
            children={<ApplicantDetails freelancer={data?.freelancers[0]} />}
          />
        )}
        <Box>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2">{email}</Typography>
          <Typography variant="body2" color="text.secondary">
            {contact_no}
          </Typography>
        </Box>
        <Box justifyContent="flex-end">
          <LoadingButton
            variant="contained"
            color="primary"
            size="small"
            sx={{ mt: "0.5rem" }}
            onClick={() => setShowProfileModal(true)}
          >
            View profile
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ApplicationCard;
