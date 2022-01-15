import { render } from "@testing-library/react";

import jobsListExamples from "../../sample-data/jobs-list";

import JobList from "./JobList";

describe("Job List Can Render list", () => {
  it("renders list", () => {
    const { getByText } = render(<JobList jobs={jobsListExamples} />);

    expect(getByText("Frontend Developer")).toBeInTheDocument();
  });
  it("renders fatured job", () => {
    const { getByText } = render(<JobList jobs={jobsListExamples} />);

    expect(getByText("Featured")).toBeInTheDocument();
  });
});
