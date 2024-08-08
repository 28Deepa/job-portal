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
