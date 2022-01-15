import { ListItem, UnorderedList } from "@chakra-ui/react";

import JobCard from "components/Job/JobCard";
import { Jobs } from "queries/__generated__/Jobs";

interface JobListProps {
  jobs: Jobs["jobs"];
}

const JobList = ({ jobs }: JobListProps) => {
  return (
    <UnorderedList listStyleType="none" m={0} spacing={4}>
      {jobs.map((job, index) => {
        return (
          <ListItem key={job.slug + index}>
            <JobCard job={job} />
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};

export default JobList;
