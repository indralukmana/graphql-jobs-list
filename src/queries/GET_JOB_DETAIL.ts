import { gql } from "@apollo/client";

const GET_JOB_DETAIL = gql`
  query JobDetail($jobInput: JobInput!) {
    job(input: $jobInput) {
      title
      slug
      commitment {
        title
      }
      tags {
        name
      }
      postedAt
      company {
        name
      }
      description
      cities {
        name
        country {
          name
        }
      }
      remotes {
        name
      }
    }
  }
`;

export default GET_JOB_DETAIL;
