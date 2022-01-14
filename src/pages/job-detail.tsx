import { Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

import JobExplanations from "components/Job/JobExplanations";
import Layout from "components/layout";
import apolloClient from "graphql/apollo-client";
import { JobDetail, JobDetailVariables } from "queries/__generated__/JobDetail";
import GET_JOB_DETAIL from "queries/GET_JOB_DETAIL";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  const companySlug = query.companySlug as string;
  const jobSlug = query.jobSlug as string;

  if (!companySlug || !jobSlug) {
    return { props: {} };
  }

  const jobDetailVariables: JobDetailVariables = {
    jobInput: {
      companySlug,
      jobSlug,
    },
  };

  const { data } = await apolloClient.query<JobDetail>({
    query: GET_JOB_DETAIL,
    variables: jobDetailVariables,
  });

  return {
    props: {
      jobDetail: data.job,
    },
  };
};

interface JobDetailPageProps {
  jobDetail?: JobDetail["job"];
}

const JobDetailPage = ({ jobDetail }: JobDetailPageProps) => {
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
        {jobDetail ? (
          <JobExplanations jobDetail={jobDetail} />
        ) : (
          "no job detail"
        )}
      </Box>
    </Layout>
  );
};

export default JobDetailPage;
