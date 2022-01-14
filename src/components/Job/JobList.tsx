import { ListItem, UnorderedList } from "@chakra-ui/react";

import JobCard from "components/Job/JobCard";

const JobList = () => {
  return (
    <UnorderedList listStyleType="none" spacing={4}>
      <ListItem>
        <JobCard />
      </ListItem>
      <ListItem>
        <JobCard />
      </ListItem>
      <ListItem>
        <JobCard />
      </ListItem>
    </UnorderedList>
  );
};

export default JobList;
