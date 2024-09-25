import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import carData from '../assets/data/carData'
import CarItem from "../components/UI/CarItem";
//import DriverSection from "../components/UI/Driver"

const Home = () => {
  return (
    <Helmet title="Home">

      <section className="p-0 hero__slider-section">
        <HeroSlider />
        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg='4' md='4'>
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg='8' md='8' sm='12'>
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className="text-center mb-5">
              <h6 className="section__subtitle">
                Come with
              </h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>
            {
              carData.slice(0,6).map(item=>(
                <CarItem item={item} key={item.id}/>
              ))
            }
          </Row>
        </Container>
      </section>




    </Helmet>
  );
};

export default Home;
