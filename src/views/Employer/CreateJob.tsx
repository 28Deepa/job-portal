import React, { useEffect, useReducer, useState } from "react";
import { useMutation } from "@apollo/client";
import { Alert, Container } from "@mui/material";
import { CreateJobForm } from "../../components";
import {
  formReducer,
  IFormState,
  initialState,
  validateField,
} from "../../components/CreateJobForm/reducer";
import { POST_JOB } from "../../graphql/employer/mutations";
import { useSelector } from "react-redux";
import { StyledContainer } from "../../global.styled";

const CreateJob = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [postJob, { loading: postJobApiLoading }] = useMutation(POST_JOB);

  const { loggedInUserData } = useSelector((state: any) => state.AuthReducer);
  const { email, contact_no, company_name, id: employer_id } = loggedInUserData;

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
    if (!hasErrors) {
      const payload = {
        job_title: formState.jobTitle.value,
        job_description: formState.jobDescription.value,
        company_name: company_name,
        salary_per_hour: formState.ratePerHour.value,
        skills: formState.tags.value.toLowerCase().split(","),
        employer_id: employer_id,
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

  useEffect(() => {
    dispatch({ type: "RESET", payload: initialState });
    // setting default values
    Object.keys(formState).forEach((field) => {
      const fieldName = field as keyof IFormState;
      if (fieldName === "email")
        dispatch({ type: "SET_VALUE", field: fieldName, value: email });
      if (fieldName === "phoneNumber")
        dispatch({ type: "SET_VALUE", field: fieldName, value: contact_no });
      if (fieldName === "company")
        dispatch({ type: "SET_VALUE", field: fieldName, value: company_name });
    });
  }, [email, contact_no, company_name, formState]);

  return (
    <Container>
      {success && <Alert severity="success">Job Posted Successfully</Alert>}
      {error && <Alert severity="error">Failed to Post Job</Alert>}
      <StyledContainer>
        <CreateJobForm
          formState={formState}
          postJobApiLoading={postJobApiLoading}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </StyledContainer>
    </Container>
  );
};

export default CreateJob;
