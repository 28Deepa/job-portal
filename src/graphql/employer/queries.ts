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
    }
    jobs_aggregate(where: { employer_id: { _eq: $employer_id } }) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_APPLICATIONS_BY_JOB_ID = gql`
  query GetApplicationsByJobId($job_id: Int!) {
    applications(where: { job_id: { _eq: $job_id } }) {
      freelancer_id
      job_id
      id
      applied_at
      applicant {
        id
        name
        email
        skills
        github_profile
      }
    }
  }
`;

// query GetJobs(
//   $skills: [String!] = [],
//   $minSalary: numeric,
//   $maxSalary: numeric,
//   $offset: Int!,
//   $limit: Int!
// ) {
//   jobs(
//     where: {
//       _and: [
//         {
//           _or: [
//             { skills: { _contains: $skills } },
//             { _not: { skills: { _contains: $skills } } }
//           ]
//         },
//         {
//           _or: [
//             { salary_per_hour: { _gte: $minSalary } },
//             { salary_per_hour: { _is_null: true } }
//           ]
//         },
//         {
//           _or: [
//             { salary_per_hour: { _lte: $maxSalary } },
//             { salary_per_hour: { _is_null: true } }
//           ]
//         }
//       ]
//     }
//     offset: $offset,
//     limit: $limit
//   ) {
//     id
//     job_title
//     job_description
//     company_name
//     salary_per_hour
//     skills
//     employer_id
//     created_at
//   }
//   jobs_aggregate(
//     where: {
//       _and: [
//         { skills: { _contains: $skills } },
//         { salary_per_hour: { _gte: $minSalary } },
//         { salary_per_hour: { _lte: $maxSalary } }
//       ]
//     }
//   ) {
//     aggregate {
//       count
//     }
//   }
// }
