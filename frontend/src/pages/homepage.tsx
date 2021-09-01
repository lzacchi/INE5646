import React, { useState } from "react";
import { Button, Col, Navbar, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import JobCard from "../components/jobcard";
import { getAllJobsOffers } from "../services/api";
import { jobDataType } from "./../models/types";
import Footer from "../components/footer";

export default function HomePage() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const jobListResponse = getAllJobsOffers();
  const [jobList, setJobList] = useState<jobDataType[]>(jobListResponse || []);
  const searchJobBar = <></>;
  const contentHeader = <>
    <Row style={{textAlign: "center"}}>
      <Col>
      <h1>Encontre o emprego dos sonhos</h1>
      <p>Inúmeras áreas para você explorar no mercado de trabalho.</p>
      <div>
        <Button className="mx-2">Crie seu perfil</Button>
        <Button className="mx-2">Anuncie sua vaga</Button>
      </div>
      </Col>
    </Row>
  </>;
  const jobCarousel =  
  <Carousel responsive={responsive}>
    {/* If job list is empty display some error text, else map jobs to jobCard */}
    {jobList.length <= 0 ? (
      <div><h3>Empty</h3></div>
      ) : (
        jobList.map((data: jobDataType) => (
          <div className="mx-5">
            <JobCard jobData={data} />
          </div>
      ))
      )}
  </Carousel>;
  return (
    <div id="homepage-wrapper" className="my-4">
      {contentHeader}
      <Navbar className="my-5 justify-content-center" expand="lg" variant="dark" style={{backgroundColor: "#A0BCF8"}}>
        <input  type="text" placeholder="Descrição da vaga" />
        <input  type="text" placeholder="Cidade" />
        <Button size="sm">Buscar</Button>
      </Navbar>
      {jobCarousel}
      <Footer/>
    </div>
  );
}
