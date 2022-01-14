import { Box } from "@chakra-ui/react";

import Layout from "components/layout";
import CTASection from "components/samples/CTASection";
import SomeImage from "components/samples/SomeImage";
import SomeText from "components/samples/SomeText";

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
        <SomeImage />

        <Box>
          <SomeText />
          <CTASection />
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
