import React, {useEffect, useState} from 'react'
import { Container, Row, Col} from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import CarItem from '../components/UI/CarItem'
import carData from '../assets/data/carData'
import axios from 'axios'
import Swal from 'sweetalert2'

const CarList = () => {

  // const [cars, setCars] = useState([])

  // useEffect(() => {
  //   fetchCars();
  // }, []);

  // const fetchCars = async () => {
  //   await axios.get(`http://localhost:8000/api/cars`).then(({data})=> {
  //     setCars(data);
  //   })
  // }

  return <Helmet title='Cars'>
    <CommonSection title='Cars List'/>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className=' d-flex align-items-canter gap-3'>
              <span className='d-flex align-items-center gap-2'><i className="ri-sort-asc"></i> Sort By</span>
              <select>
                <option>Select</option>
                <option value='low'>Low to High</option>
                <option value='high'>High to Low</option>
              </select>
            </div>
          </Col>
          {
            carData.map((item)=> (<CarItem item={item} key={item.id}/>))
          }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default CarList