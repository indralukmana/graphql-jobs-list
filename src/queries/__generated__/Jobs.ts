/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Jobs
// ====================================================

export interface Jobs_jobs_tags {
  __typename: "Tag";
  name: string;
}

export interface Jobs_jobs_company {
  __typename: "Company";
  slug: string;
  name: string;
  logoUrl: string | null;
}

export interface Jobs_jobs_countries {
  __typename: "Country";
  name: string;
  type: string;
}

export interface Jobs_jobs_remotes {
  __typename: "Remote";
  name: string;
}

export interface Jobs_jobs {
  __typename: "Job";
  slug: string;
  title: string;
  isFeatured: boolean | null;
  tags: Jobs_jobs_tags[] | null;
  company: Jobs_jobs_company | null;
  countries: Jobs_jobs_countries[] | null;
  remotes: Jobs_jobs_remotes[] | null;
}

export interface Jobs {
  jobs: Jobs_jobs[];
}
