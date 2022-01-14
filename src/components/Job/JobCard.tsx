import { Box } from "@chakra-ui/react";

import { Jobs_jobs } from "__generated__/Jobs";

interface JobCardProps {
  job: Jobs_jobs;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={5} overflow="hidden">
      {job.title}
      {job.company?.name}
      {job.tags?.map((tag) => tag.name)}
      {job.countries?.map((country) => country.name)}
      {job.remotes?.map((remote) => remote.name)}
    </Box>
  );
};

export default JobCard;
