import { gql } from "@apollo/client";

export const GET_JOBS_BY_EMPLOYER = gql`
  query GET_JOBS_BY_EMPLOYER($employer_id: Int!, $limit: Int!, $offset: Int!) {
    jobs(
      where: { employer_id: { _eq: $employer_id } }
      limit: $limit
      offset: $offset
      order_by: { created_at: desc }
    ) {
      id
      job_title
      job_description
      company_name
      salary_per_hour
      skills
      created_at
      applications(where: { employer_id: { _eq: $employer_id } }) {
        freelancer_id
      }
    }

    jobs_aggregate(where: { employer_id: { _eq: $employer_id } }) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_APPLICATIONS_BY_JOB_ID = gql`
  query GetApplicationsByJobId($job_id: Int!, $limit: Int!, $offset: Int!) {
    applications(
      where: { job_id: { _eq: $job_id } }
      limit: $limit
      offset: $offset
      order_by: { applied_at: desc }
    ) {
      job_id
      id
      applied_at
      freelancer_id
      freelancer {
        id
        name
        email
        contact_no
      }
    }
  }
`;
