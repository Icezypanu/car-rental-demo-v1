import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const AddCars = () => {
  const navigate = useNavigate();
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [speed, setSpeed] = useState("");
  const [seatType, setSeatType] = useState("");
  const [automatic, setAutomatic] = useState("");
  const [gps, setGps] = useState("");
  const [price, setPrice] = useState(0.0);
  const [detail, setDetail] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [validationError, setValidationError] = useState({});

  const changeHandler = (event) => {
    setImgUrl(event.target.files[0]);
  };

  const addCar = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("brand", brand);
    formData.append("name", name);
    formData.append("model", model);
    formData.append("speed", speed);
    formData.append("seatType", seatType);
    formData.append("automatic", automatic);
    formData.append("gps", gps);
    formData.append("price", price);
    formData.append("detail", detail);
    formData.append("imgUrl", imgUrl);

    await axios
      .post(`http://localhost:8000/api/cars`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        navigate("/");
      })
      .catch(({ Response }) => {
        if (Response.status === 422) {
          setValidationError(Response.data.errors);
        } else {
          Swal.fire({
            text: Response.data.message,
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Add New Car</h4>
              <hr />
              <div className="form-wrapper">
                {Object.keys(validationError).length > 0 && (
                  <div className="row">
                    <div className="col-12">
                      <div className="alert alert-danger">
                        <ul className="mb-0">
                          {Object.entries(validationError).map(
                            ([key, value]) => (
                              <li key={key}>{value}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                <Form onSubmit={addCar}>
                  <Row>
                    <Col>
                      <Form.Group controlId="Brand">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control
                          type="text"
                          value={brand}
                          onChange={(e) => {
                            setBrand(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Model">
                        <Form.Label>Model</Form.Label>
                        <Form.Control
                          type="text"
                          value={model}
                          onChange={(e) => {
                            setModel(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Speed">
                        <Form.Label>Speed</Form.Label>
                        <Form.Control
                          type="text"
                          value={speed}
                          onChange={(e) => {
                            setSpeed(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="SeatType">
                        <Form.Label>Seat Type</Form.Label>
                        <Form.Control
                          type="text"
                          value={seatType}
                          onChange={(e) => {
                            setSeatType(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Automatic">
                        <Form.Label>Automatic</Form.Label>
                        <Form.Control
                          type="text"
                          value={automatic}
                          onChange={(e) => {
                            setAutomatic(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="GPS">
                        <Form.Label>GPS</Form.Label>
                        <Form.Control
                          type="text"
                          value={gps}
                          onChange={(e) => {
                            setGps(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                          type="number"
                          min="1"
                          value={price}
                          onChange={(e) => {
                            const value = parseFloat(e.target.value);
                            if (value > 0) {
                              setPrice(value);
                            } else {
                              setPrice("");
                            }
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Detail">
                        <Form.Label>Detail</Form.Label>
                        <Form.Control
                          as="textarea"
                          row={3}
                          value={detail}
                          onChange={(e) => {
                            setDetail(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="imgUrl">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" onChange={changeHandler} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    variant="primary"
                    className="mt-2"
                    size="lg"
                    block="block"
                    type="submit"
                  >
                    Add
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCars;
