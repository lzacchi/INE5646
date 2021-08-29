import React from 'react';
import { Card, Button } from "react-bootstrap";
import { jobDataType } from "../models/types";

export default function JobCard(props):JSX.Element {
    const jobData:jobDataType = props.jobData;
    console.log("jobcard debug", jobData);
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Subtitle className="mb-2 text-muted">{jobData.jobTags}</Card.Subtitle>
            <Card.Body>
                <Card.Title>{jobData.jobTitle}</Card.Title>
                <Card.Text>{jobData.jobDescription}
                </Card.Text>
                <Button variant="primary" href={`/joboffer/${jobData.jobId}`}>Quero me inscrever!</Button>
            </Card.Body>
            </Card>
    );
}