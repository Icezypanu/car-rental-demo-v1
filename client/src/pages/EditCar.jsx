import React, { useState, useEffect } from "react";
import carData from "../assets/data/carData";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditCarPage = () => {
  const navigate = useNavigate();
  const [validationError, setValidationError] = useState({});

  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);

  const [carDetails, setCarDetails] = useState({
    name: singleCarItem.carName,
    price: singleCarItem.price,
    model: singleCarItem.model,
    automatic: singleCarItem.automatic,
    speed: singleCarItem.speed,
    gps: singleCarItem.gps,
    seatType: singleCarItem.seatType,
    brand: singleCarItem.brand,
    description: singleCarItem.description,
    imgUrl: singleCarItem.imgUrl, // Add image URL to the state
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({ ...carDetails, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Simulate image upload with file object URL for now
      const newImgUrl = URL.createObjectURL(file);
      setCarDetails({ ...carDetails, imgUrl: newImgUrl });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Car details updated:", carDetails);

    // Redirect to the car details page after saving
    const formData = new FprmData();
    formData.append("_method", "PATCH");
    formData.append("brand", brand);
    formData.append("name", name);
    formData.append("model", model);
    formData.append("speed", speed);
    formData.append("seatType", seatType);
    formData.append("automatic", automatic);
    formData.append("gps", gps);
    formData.append("price", price);
    formData.append("detail", detail);
    if (imgUrl != null) {
      formData.append("imgUrl", imgUrl);
    }

    await axios
      .post(`http://localhost:8000/api/cars/${id}`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        navigate("/");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        } else {
          Swal.fire({
            text: Response.data.message,
            icon: "error",
          });
        }
      });
  };

  return (
    <Helmet title={`Edit ${carDetails.carName}`}>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="car__info">
                <h2 className="section__title">Edit {carDetails.carName}</h2>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label>Car Name</label>
                        <Input
                          type="text"
                          name="carName"
                          value={carDetails.carName}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>

                    <Col lg="6">
                      <FormGroup>
                        <label>Price (฿)</label>
                        <Input
                          type="number"
                          name="price"
                          value={carDetails.price}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>

                    <Col lg="6">
                      <FormGroup>
                        <label>Model</label>
                        <Input
                          type="text"
                          name="model"
                          value={carDetails.model}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>

                    <Col lg="6">
                      <FormGroup>
                        <label>Automatic</label>
                        <Input
                          type="select"
                          name="automatic"
                          value={carDetails.automatic}
                          onChange={handleChange}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col lg="6">
                      <FormGroup>
                        <label>Speed</label>
                        <Input
                          type="text"
                          name="speed"
                          value={carDetails.speed}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>

                    <Col lg="6">
                      <FormGroup>
                        <label>GPS</label>
                        <Input
                          type="select"
                          name="gps"
                          value={carDetails.gps}
                          onChange={handleChange}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col lg="6">
                      <FormGroup>
                        <label>Seat Type</label>
                        <Input
                          type="text"
                          name="seatType"
                          value={carDetails.seatType}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>

                    <Col lg="6">
                      <FormGroup>
                        <label>Brand</label>
                        <Input
                          type="text"
                          name="brand"
                          value={carDetails.brand}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>

                    <Col lg="12">
                      <FormGroup>
                        <label>Description</label>
                        <Input
                          type="textarea"
                          name="description"
                          value={carDetails.description}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>

                    <Col lg="6">
                      <FormGroup>
                        <label>Rating</label>
                        <Input
                          type="number"
                          name="rating"
                          value={carDetails.rating}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                    {/* Image and Image Upload Button */}
                    <Col lg="12">
                      <div className="text-center mb-5">
                        <img src={carDetails.imgUrl} alt="" className="w-50" />
                        <FormGroup className="mt-3">
                          <label>Update Car Image</label>
                          <Input
                            type="file"
                            name="imgUrl"
                            onChange={handleImageChange}
                          />
                        </FormGroup>
                      </div>
                    </Col>
                  </Row>

                  <Button type="submit" color="primary">
                    Save Changes
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default EditCarPage;
