import { gql } from "@apollo/client";

const FETCH_APPLICANT_DETAILS = gql`
  query fetchApplicantDetails($id: Int!) {
    applicants(where: { id: { _eq: $id } }) {
      id
      name
      email
      github_profile
      skills
      applications {
        id
        job_id
      }
    }
  }
`;

const FETCH_JOBS_FOR_APPLICANT = gql`
  query fetchJobsForApplicant($offset: Int!, $limit: Int!) {
    jobs(offset: $offset, limit: $limit) {
      id
      job_title
      job_description
      company_name
      salary_per_hour
      skills
      employer_id
      created_at
    }
  }
`;

const FETCH_JOBS_BY_EMPLOYER = gql`
  query GetJobsByEmployer($employer_id: Int!) {
    jobs(where: { employer_id: { _eq: $employer_id } }) {
      id
      job_title
      job_description
      company_name
      salary_per_hour
      skills
      created_at
    }
  }
`;
