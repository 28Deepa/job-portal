import { gql } from "@apollo/client";

export const GET_JOBS = gql`
  query GetJobs(
    $offset: Int!
    $limit: Int!
    $minRate: numeric = 0
    $maxRate: numeric = 100000
    $skills: [String!] = []
  ) {
    jobs(
      offset: $offset
      limit: $limit
      where: {
        _and: [
          { salary_per_hour: { _gte: $minRate } }
          { salary_per_hour: { _lte: $maxRate } }
          { skills: { _contains: $skills } }
        ]
      }
      order_by: { created_at: desc }
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
          { salary_per_hour: { _gte: $minRate } }
          { salary_per_hour: { _lte: $maxRate } }
          { skills: { _contains: $skills } }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_JOBS_BY_FILTER = gql`
  query GetJobs(
    $skills: [String!]
    $minRate: numeric
    $maxRate: numeric
    $offset: Int!
    $limit: Int!
  ) {
    jobs(
      where: {
        _and: [
          { skills: { _contains: $skills } }
          { salary_per_hour: { _gte: $minRate } }
          { salary_per_hour: { _lte: $maxRate } }
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
          { salary_per_hour: { _gte: $minRate } }
          { salary_per_hour: { _lte: $maxRate } }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;

export const FREELANCER_DETAILS_BY_ID = gql`
  query freelancerById($freelancer_id: Int = 10) {
    freelancers(where: { id: { _eq: $freelancer_id } }) {
      name
      email
      contact_no
      skills
      github_profile
      projects
    }
  }
`;

export const GET_FREELANCER_JOBS_BY_ID = gql`
  query applicationsByFreelancer($freelancer_id: Int!) {
    applications(where: { freelancer_id: { _eq: $freelancer_id } }) {
      job_id
      id
      applied_at
    }
  }
`;
