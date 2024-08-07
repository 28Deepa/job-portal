import { gql } from "@apollo/client";

export const POST_JOB = gql`
  mutation PostJob($object: jobs_insert_input!) {
    insert_jobs_one(object: $object) {
      job_title
      job_description
      company_name
      salary_per_hour
      skills
      employer_id
    }
  }
`;
