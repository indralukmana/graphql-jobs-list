import { gql } from "@apollo/client";
import { Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

import { Jobs } from "__generated__/Jobs";
import JobList from "components/Job/JobList";
import Layout from "components/layout";
import apolloClient from "graphql/apollo-client";

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await apolloClient.query<Jobs>({
    query: gql`
      query Jobs {
        jobs {
          title
          isFeatured
          tags {
            name
          }
          company {
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
    `,
  });

  return {
    props: {
      jobs: data.jobs,
    },
  };
};

interface HomeProps {
  jobs: Jobs["jobs"];
}

const Home = ({ jobs }: HomeProps) => {
  return (
    <Layout>
      <Box
        display={{ md: "flex" }}
        alignItems="center"
        minHeight="70vh"
        gap={8}
        mb={8}
        w="full"
      >
        <JobList jobs={jobs} />
      </Box>
    </Layout>
  );
};

export default Home;
