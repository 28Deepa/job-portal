import React from "react";
import {
  TextField,
  Button,
  Box,
  Grid,
  InputAdornment,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

interface ICreateJobFormProps {
  formState: any;
  postJobApiLoading: any;
  handleChange: any;
  handleSubmit: any;
}

const CreateJobForm: React.FC<ICreateJobFormProps> = ({
  formState,
  postJobApiLoading,
  handleChange,
  handleSubmit,
}) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 1 }}
      maxWidth="500px"
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Create a new Job Post
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="jobTitle"
            label="Job Title"
            fullWidth
            variant="outlined"
            value={formState.jobTitle.value}
            onChange={handleChange("jobTitle")}
            error={
              formState.jobTitle.isTouched && Boolean(formState.jobTitle.error)
            }
            helperText={
              formState.jobTitle.isTouched && formState.jobTitle.error
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="jobDescription"
            label="Job Description"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={formState.jobDescription.value}
            onChange={handleChange("jobDescription")}
            error={
              formState.jobDescription.isTouched &&
              Boolean(formState.jobDescription.error)
            }
            helperText={
              formState.jobDescription.isTouched &&
              formState.jobDescription.error
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="company"
            label="Company"
            fullWidth
            variant="outlined"
            value={formState.company.value}
            onChange={handleChange("company")}
            error={
              formState.company.isTouched && Boolean(formState.company.error)
            }
            helperText={formState.company.isTouched && formState.company.error}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="ratePerHour"
            label="Rate Per Hour"
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            value={formState.ratePerHour.value}
            onChange={handleChange("ratePerHour")}
            error={
              formState.ratePerHour.isTouched &&
              Boolean(formState.ratePerHour.error)
            }
            helperText={
              formState.ratePerHour.isTouched && formState.ratePerHour.error
            }
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="tags"
            label="Tags"
            fullWidth
            variant="outlined"
            value={formState.tags.value}
            onChange={handleChange("tags")}
            error={formState.tags.isTouched && Boolean(formState.tags.error)}
            helperText={formState.tags.isTouched && formState.tags.error}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            variant="outlined"
            value={formState.phoneNumber.value}
            onChange={handleChange("phoneNumber")}
            error={
              formState.phoneNumber.isTouched &&
              Boolean(formState.phoneNumber.error)
            }
            helperText={
              formState.phoneNumber.isTouched && formState.phoneNumber.error
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            value={formState.email.value}
            onChange={handleChange("email")}
            error={formState.email.isTouched && Boolean(formState.email.error)}
            helperText={formState.email.isTouched && formState.email.error}
          />
        </Grid>
        <Grid item xs={12}>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            loading={postJobApiLoading}
          >
            Create Job
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateJobForm;
