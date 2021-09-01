import React from "react";
import { Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { jobDataType } from "../../models/types";
import { getJobOfferData } from "../../services/api";
import styles from "./style.module.css";

export default function JobPage() {
  const { id } = useParams<{ id: string }>();
  const jobData = getJobOfferData(Number(id));

  const errorPage = (
    <div className={`${styles['jobpageWrapper']}`}>
      <h1>Erro 404:</h1>
      <p>Essa vaga não existe. Em caso de dúvidas contate o administrador do sistema.</p>
    </div>
  );
  return jobData == null ? (
    errorPage
  ) : (
    <div className={`${styles['jobpageWrapper']}`}>
      <h1>{jobData.jobTitle}</h1>
      <hr />
      <h4>
        {jobData.jobTags.map((tag: string) =>(
          <Badge key={tag} className={`${styles['techBadge']}`}>{tag}</Badge>
        ))}
      </h4>
      <p>{jobData.jobDescription}</p>
    </div>
  );
}
