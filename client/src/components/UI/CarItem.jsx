import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/carItem.css";

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__img">
        <div className="car__actions d-flex justify-content-end mt-2">
          <span className="icon-btn me-2">
            <Link to={`/editcar/${carName}`}>
              <i class="ri-edit-line"></i>
            </Link>
          </span>
          <span className="icon-btn">
            <i className="ri-delete-bin-line"></i>
          </span>
        </div>

        <img src={imgUrl} alt="" className="w-100" />
        <div className="car__item-content mt-4">
          <h4 className="section__title text-center"> {carName}</h4>
          <h6 className="rent__price text-center mt-">
            ฿{price}.00<span>/Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-4 mb-4">
            <span className="d-flex align-items-center gap-1">
              <i class="ri-car-line"></i>
              {model}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i>
              {automatic}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i class="ri-speed-up-line"></i>
              {speed}
            </span>
          </div>

          <button className="w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>

          <button className="w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}>Detail</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
