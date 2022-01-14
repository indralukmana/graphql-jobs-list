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

import { Jobs_jobs } from "queries/__generated__/Jobs";

interface JobCardProps {
  job: Jobs_jobs;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "2fr 1fr 1fr" }}
      gap={4}
      borderWidth="1px"
      borderRadius="lg"
      p={5}
      overflow="hidden"
    >
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
          <WrapItem>
            <Badge>{tag.name}</Badge>
          </WrapItem>
        ))}
      </Wrap>
      <HStack spacing={2} maxW="md">
        {job.countries?.map((country) => (
          <Box borderWidth={1} p={1}>
            {country.name}
          </Box>
        ))}
        {job.remotes?.map((remote) => (
          <Box borderWidth={1} p={1}>
            {remote.name}
          </Box>
        ))}
      </HStack>
    </Grid>
  );
};

export default JobCard;
