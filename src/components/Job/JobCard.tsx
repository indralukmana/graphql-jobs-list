import {
  Badge,
  Box,
  Grid,
  Heading,
  HStack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Link from "next/link";

import { Jobs_jobs } from "queries/__generated__/Jobs";

interface JobCardProps {
  job: Jobs_jobs;
}

const JobCard = ({ job }: JobCardProps) => {
  const { isFeatured, slug, company } = job;

  return (
    <Link
      href={{
        pathname: "job-detail",
        query: { jobSlug: slug, companySlug: company?.slug },
      }}
    >
      <a>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          p={5}
          overflow="hidden"
          bgColor={isFeatured ? "teal.500" : ""}
        >
          {isFeatured ? (
            <Text fontWeight="bold" mb="5">
              Featured
            </Text>
          ) : null}
          <Grid templateColumns={{ base: "1fr", md: "2fr 1fr 1fr" }} gap={4}>
            <Box>
              <Heading as="h3" size="md">
                {job.title}
              </Heading>
              <Text as="h4" fontSize="md">
                {job.company?.name}
              </Text>
            </Box>
            <Wrap spacing={2}>
              {job.tags?.map((tag) => (
                <WrapItem key={tag.name}>
                  <Badge>{tag.name}</Badge>
                </WrapItem>
              ))}
            </Wrap>
            <HStack spacing={2} maxW="md">
              {job.countries?.map((country) => (
                <Box key={country.name} borderWidth={1} p={1}>
                  {country.name}
                </Box>
              ))}
              {job.remotes?.map((remote) => (
                <Box key={remote.name} borderWidth={1} p={1}>
                  {remote.name}
                </Box>
              ))}
            </HStack>
          </Grid>
        </Box>
      </a>
    </Link>
  );
};

export default JobCard;
