import React from 'react';
import { Card, Button, Col, Row } from "react-bootstrap";
import { jobDataType } from "../../models/types";
import { FcShare } from "react-icons/fc";
import styles from "./style.module.css";

export default function JobCard(props): JSX.Element {
  const jobData: jobDataType = props.jobData;

  // Utils
  function handleMultilineString(mlstring: string) {
    return mlstring.split("\n").map((line: string) => <p>{line}</p>);
  }

  return (
    <Card className={`${styles['jobCardWrapper']}`}>
      <Card.Subtitle className={`${styles['cardSubtitle']}`}>{jobData.jobTags.join(", ")}</Card.Subtitle>

      <Card.Body className={`${styles['card-body']}`} >
        <Card.Title className={`${styles['card-title']}`} >
          {jobData.jobTitle}
        </Card.Title>

        <Card.Text className={`${styles['card-text']}`} >
          {handleMultilineString(jobData.jobDescription)}
        </Card.Text>

        <div className={`${styles['card-center-info']}`}>
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