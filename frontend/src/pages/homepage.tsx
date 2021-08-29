import React, { useState } from "react";
import { Col, Row, Card } from "react-bootstrap";

import { jobDataType } from "./../models/types";
import JobCard from "../components/jobcard";
import { getAllJobsOffers } from "../services/api";

export default function HomePage() {
  const jobListResponse = getAllJobsOffers();
  const [jobList, setJobList] = useState<jobDataType[]>(jobListResponse || []);

  return (
    <div id="homepage-wrapper">
      <h1>Hey This is our homepage</h1>
      <p>Some Text</p>
      <Row>
      {/* If job list is empty display some error text, else map jobs to jobCard */}
        {jobList.length <= 0 ? (
          <h1>Empty</h1>
        ) : (
          jobList.map((data: jobDataType) => (
            <Col>
              <JobCard jobData={data} />
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}
