import { Box } from "@chakra-ui/react";

import JobList from "components/Job/JobList";
import Layout from "components/layout";

const Home = () => {
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
        <JobList />
      </Box>
    </Layout>
  );
};

export default Home;
