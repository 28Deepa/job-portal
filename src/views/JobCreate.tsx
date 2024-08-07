import React, { useReducer, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { CreateJobForm } from "../components";
import {
  formReducer,
  IFormState,
  initialState,
  validateField,
} from "../components/CreateJobForm/reducer";
import { POST_JOB } from "../graphql/employer/mutations";

const JobCreate = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [postJob, { loading: postJobApiLoading }] = useMutation(POST_JOB);

  const handleChange = (field: any) => (event: any) => {
    const { value } = event.target;
    dispatch({ type: "SET_VALUE", field, value });
    dispatch({
      type: "SET_ERROR",
      field,
      error: validateField(field, value),
    });
  };

  const handleSubmit = async (event: any) => {
    // let hasErrors = true;
    event.preventDefault();
    Object.keys(formState).forEach((field) => {
      const fieldName = field as keyof IFormState;
      dispatch({ type: "SET_TOUCHED", field: fieldName });
      dispatch({
        type: "SET_ERROR",
        field: fieldName,
        error: validateField(fieldName, formState[fieldName].value),
      });
    });

    const hasErrors = Object.values(formState).some((field) => field.error);

    console.log("hasErrors", hasErrors);
    if (!hasErrors) {
      const payload = {
        job_title: formState.jobTitle.value,
        job_description: formState.jobDescription.value,
        company_name: formState.company.value,
        salary_per_hour: "$" + formState.ratePerHour.value,
        skills: formState.tags.value.split(","),
        employer_id: 1,
      };

      try {
        const { data } = await postJob({
          variables: {
            object: payload,
          },
        });

        if (data) {
          setSuccess(true);
          setError(false);
          dispatch({ type: "RESET", payload: initialState });
          setTimeout(() => setSuccess(false), 3000);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setError(true);
        setSuccess(false);
        setTimeout(() => setError(false), 3000);
      }
    }
  };

  return (
    <Container>
      {success && <Alert severity="success">Job Posted Successfully</Alert>}
      {error && <Alert severity="error">Failed to Post Job</Alert>}
      <Box display="flex" alignSelf="center" justifyContent="center">
        <CreateJobForm
          formState={formState}
          postJobApiLoading={postJobApiLoading}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Box>
    </Container>
  );
};

export default JobCreate;
