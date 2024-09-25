import React, { useState } from "react";
import "../../styles/findCarForm.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  const [formData, setFormData] = useState({
    fromAddress: "",
    toAddress: "",
    date: "",
    time: "",
    carType: "ac", // default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    console.log(JSON.stringify(formData)); // Output JSON format to console
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input
            type="text"
            name="fromAddress"
            placeholder="From address"
            value={formData.fromAddress}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="text"
            name="toAddress"
            placeholder="To address"
            value={formData.toAddress}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey_time"
            name="time"
            type="time"
            placeholder="Time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="select_group">
          <select
            name="carType"
            value={formData.carType}
            onChange={handleChange}
          >
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button type="submit" className="btn find__car-btn">
            Find Car
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
