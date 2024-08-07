import { gql, useQuery } from "@apollo/client";

export const GET_JOBS = gql`
  query GetJobs($offset: Int!, $limit: Int!) {
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
    jobs_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export const GET_JOBS_BY_FILTER = gql`
  query GetJobs(
    $skills: [String!]
    $minSalary: numeric
    $maxSalary: numeric
    $offset: Int!
    $limit: Int!
  ) {
    jobs(
      where: {
        _and: [
          { skills: { _contains: $skills } }
          { salary_per_hour: { _gte: $minSalary } }
          { salary_per_hour: { _lte: $maxSalary } }
        ]
      }
      offset: $offset
      limit: $limit
    ) {
      id
      job_title
      job_description
      company_name
      salary_per_hour
      skills
      employer_id
      created_at
    }
    jobs_aggregate(
      where: {
        _and: [
          { skills: { _contains: $skills } }
          { salary_per_hour: { _gte: $minSalary } }
          { salary_per_hour: { _lte: $maxSalary } }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;

// export const useFetchJobsForFreelancer = () => {
//   const { error, loading, data, fetchMore } = useQuery(GET_JOBS);
//   return {
//     error,
//     loading,
//     data,
//     fetchMore,
//   };
// };
