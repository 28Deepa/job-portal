import { Box, Chip, Grid, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useMutation } from "@apollo/client";
import { APPLY_FOR_JOB } from "../../graphql/freelancer/mutations";
import { useDispatch, useSelector } from "react-redux";
import { updateJobsAppliedByFreelancer } from "../../store/actions/FreelancerAction";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

const ApplicantJobCard = (job: any) => {
  const { id, job_title, company_name, salary_per_hour, skills, employer_id } =
    job.job;
  const { appliedJobs } = useSelector((state: any) => state.FreelancerReducer);
  const { loggedInUserData } = useSelector((state: any) => state.AuthReducer);
  const dispatch: any = useDispatch();

  function isIdPresent(jobIdToCheck: number): boolean {
    if (appliedJobs?.length === 0) return false;
    return appliedJobs?.some(
      (appliedJob: any) => appliedJob?.job_id === jobIdToCheck
    );
  }

  const [applyForJob, { loading, error }] = useMutation(APPLY_FOR_JOB);

  const handleApplyJob = async () => {
    const payload = {
      job_id: id,
      freelancer_id: loggedInUserData.id,
      employer_id: employer_id,
    };

    try {
      const { data } = await applyForJob({
        variables: {
          object: payload,
        },
      });

      if (data) {
        dispatch(
          updateJobsAppliedByFreelancer([
            ...appliedJobs,
            data?.insert_applications_one,
          ])
        );
      }
      alert("Application submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to submit application.");
    }
  };

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
            {"$"} {salary_per_hour}
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
          {isIdPresent(id) ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ mt: 1, mr: 2 }}
            >
              <DoneOutlinedIcon sx={{ color: "green" }} />
              <Typography color="green">Applied</Typography>
            </Box>
          ) : (
            <LoadingButton
              variant="contained"
              disabled={isIdPresent(id)}
              color={"primary"}
              size="small"
              sx={{ mt: "0.5rem" }}
              onClick={handleApplyJob}
              loading={loading && !error}
            >
              Quick Apply
            </LoadingButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ApplicantJobCard;
