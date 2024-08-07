import { gql } from "@apollo/client";

export const APPLY_FOR_JOB = gql`
  mutation ApplyForJob($object: applications_insert_input!) {
    insert_applications_one(object: $object) {
      id
      freelancer_id
      job_id
      employer_id
    }
  }
`;

// import { gql } from "@apollo/client";

// export const POST_JOB = gql`
//   mutation PostJob($object: jobs_insert_input!) {
//     insert_jobs_one(object: $object) {
//       job_title
//       job_description
//       company_name
//       salary_per_hour
//       skills
//       employer_id
//     }
//   }
// `;

// export const APPLY_FOR_JOB = gql`
//   mutation ApplyForJob($freelancer_id: Int!, $job_id: Int!) {
//     insert_applications_one(
//       object: { freelancer_id: $freelancer_id, job_id: $job_id }
//     ) {
//       id
//       freelancer_id
//       job_id
//       applied_at
//     }
//   }
// `;

// import { gql } from "@apollo/client";

// export const GET_JOBS = gql`
//   query GetJobs($offset: Int!, $limit: Int!) {
//     jobs(offset: $offset, limit: $limit) {
//       id
//       job_title
//       job_description
//       company_name
//       salary_per_hour
//       skills
//       employer_id
//       created_at
//     }
//     jobs_aggregate {
//       aggregate {
//         count
//       }
//     }
//   }
// `;

// export const GET_JOBS_BY_EMPLOYER = gql`
//   query GET_JOBS_BY_EMPLOYER($employer_id: Int!, $limit: Int!, $offset: Int!) {
//     jobs(
//       where: { employer_id: { _eq: $employer_id } }
//       limit: $limit
//       offset: $offset
//       order_by: { created_at: desc }
//     ) {
//       id
//       job_title
//       job_description
//       company_name
//       salary_per_hour
//       skills
//       created_at
//     }
//     jobs_aggregate(where: { employer_id: { _eq: $employer_id } }) {
//       aggregate {
//         count
//       }
//     }
//   }
// `;

// export const GET_APPLICATIONS_BY_JOB_ID = gql`
//   query GetApplicationsByJobId($job_id: Int!) {
//     applications(where: { job_id: { _eq: $job_id } }) {
//       freelancer_id
//       job_id
//       id
//       applied_at
//       freelancer {
//         id
//         name
//         email
//         skills
//         github_profile
//       }
//     }
//   }
// `;
