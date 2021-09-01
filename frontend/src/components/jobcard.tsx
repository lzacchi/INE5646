import React from 'react';
import { Card, Button, Col, Row } from "react-bootstrap";
import { jobDataType } from "../models/types";
import { FcShare } from "react-icons/fc"

export default function JobCard(props): JSX.Element {
  const jobData: jobDataType = props.jobData;

  // Utils
  function handleMultilineString(mlstring: string) {
    return mlstring.split("\n").map((line: string) => <p>{line}</p>);
  }

  return (
    <Card className="align-items-stretch">
      <Card.Subtitle className="m-2 mb-0 text-muted">{jobData.jobTags.join(", ")}</Card.Subtitle>
      <Card.Body style={{ minHeight: "250px" }}>
        <Card.Title style={{ fontWeight: "bolder" }}>{jobData.jobTitle}</Card.Title>
        <Card.Text style={{ fontWeight: "lighter", fontSize: "0.8rem" }}>{handleMultilineString(jobData.jobDescription)}
        </Card.Text>
        <div className="text-center">
          <Button variant="outline-primary" href={`/joboffer/${jobData.jobId}`}>Quero me inscrever!</Button>
        </div>
      </Card.Body>
      <Card.Footer >
        <Row>
          <Col xs={10}>
            <div >Publicada há X dias</div>
          </Col>
          <Col>
            <FcShare />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}