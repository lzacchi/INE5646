import { jobDataType } from './../models/types';
import jobofferFakeData from "./jobofferFakeData.json"

export function getJobOfferData(id:number):jobDataType|undefined { 
    const jobData = jobofferFakeData.find(j => j.jobId == id);
    return (jobData);
}

export function getAllJobsOffers() {
    return jobofferFakeData;
}