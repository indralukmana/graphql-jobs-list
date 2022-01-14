import { gql } from "@apollo/client";

const GET_JOBS_LIST = gql`
  query Jobs {
    jobs {
      slug
      title
      isFeatured
      tags {
        name
      }
      company {
        slug
        name
        logoUrl
      }
      countries {
        name
        type
      }
      remotes {
        name
      }
    }
  }
`;

export default GET_JOBS_LIST;
