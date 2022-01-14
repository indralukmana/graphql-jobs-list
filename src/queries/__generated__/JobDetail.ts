/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { JobInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: JobDetail
// ====================================================

export interface JobDetail_job_commitment {
  __typename: "Commitment";
  title: string;
}

export interface JobDetail_job_tags {
  __typename: "Tag";
  name: string;
}

export interface JobDetail_job_company {
  __typename: "Company";
  name: string;
}

export interface JobDetail_job_cities_country {
  __typename: "Country";
  name: string;
}

export interface JobDetail_job_cities {
  __typename: "City";
  name: string;
  country: JobDetail_job_cities_country;
}

export interface JobDetail_job_remotes {
  __typename: "Remote";
  name: string;
}

export interface JobDetail_job {
  __typename: "Job";
  title: string;
  slug: string;
  commitment: JobDetail_job_commitment;
  tags: JobDetail_job_tags[] | null;
  postedAt: any;
  company: JobDetail_job_company | null;
  description: string | null;
  cities: JobDetail_job_cities[] | null;
  remotes: JobDetail_job_remotes[] | null;
}

export interface JobDetail {
  job: JobDetail_job;
}

export interface JobDetailVariables {
  jobInput: JobInput;
}
