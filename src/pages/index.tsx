import { Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

import JobList from "components/Job/JobList";
import Layout from "components/layout";
import apolloClient from "graphql/apollo-client";
import { Jobs } from "queries/__generated__/Jobs";
import GET_JOBS_LIST from "queries/GET_JOBS_LIST";

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await apolloClient.query<Jobs>({
    query: GET_JOBS_LIST,
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
