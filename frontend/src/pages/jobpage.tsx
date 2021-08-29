import React from "react";
import { useParams, } from "react-router-dom";
import { jobDataType } from './../models/types';
import {getJobOfferData} from "../services/api";

export default function JobPage() {
    const { id } = useParams<{id: string}>();
    const jobData = getJobOfferData(Number(id));

    const errorPage = 
    <>
    <h1>Im sorry this page does not exists</h1>
    </>;
    return (
        jobData == null ?
            errorPage
            :
            <>
            <h1>{jobData.jobTitle}</h1>
            <h3>{jobData.jobTags}</h3>
            <p>{jobData.jobDescription}</p>
            
            </>
    );
}
