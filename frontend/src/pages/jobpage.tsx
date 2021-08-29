import React from "react";
import { useParams } from "react-router-dom";

export default function JobPage() {
let { id } = useParams();
return (
    <>
        <h1>Job page from job offer: {id}</h1>
    </>
);
}