import {
  Badge,
  Box,
  Heading,
  HStack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { JobDetail } from "queries/__generated__/JobDetail";

interface JobExplanationsProps {
  jobDetail?: JobDetail["job"];
}
const JobExplanations = ({ jobDetail }: JobExplanationsProps) => {
  return (
    <VStack spacing={4}>
      <Box>
        <Heading as="h2">{jobDetail?.title}</Heading>
        <Text as="h3">Company: {jobDetail?.company?.name}</Text>
      </Box>
      <Wrap spacing={2}>
        {jobDetail?.tags?.map((tag) => (
          <WrapItem>
            <Badge>{tag.name}</Badge>
          </WrapItem>
        ))}
      </Wrap>
      <HStack spacing={2} maxW="md">
        {jobDetail?.cities?.map((city) => (
          <Box key={city.name} borderWidth={1} p={1}>
            {city.name} - {city.country.name}
          </Box>
        ))}
        {jobDetail?.remotes?.map((remote) => (
          <Box key={remote.name} borderWidth={1} p={1}>
            {remote.name}
          </Box>
        ))}
      </HStack>
      <Box>Commitment: {jobDetail?.commitment?.title}</Box>
      <Box>Description: {jobDetail?.description}</Box>
    </VStack>
  );
};

export default JobExplanations;
