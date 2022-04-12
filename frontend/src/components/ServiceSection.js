import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import ServiceCard from './ServiceCard'
import { services } from './services'
import '../assets/css/ServiceSection.css'

//Border CSS
const border = {
  position: 'relative',
  width: '6%',
  height: '5px',
  backgroundColor: '#000',
  margin: '0 auto',
}

const ServiceSection = () => {
  return (
    <div className="service ">
      <Container>
        <Row className="text-center my-3">
          <h1>Our Services</h1>
          <div className="border" style={border}></div>
          <p
            style={{
              lineHeight: '2.3rem',
              fontSize: '1.2rem',
              color: '#7d7986',
              marginTop: '1rem',
            }}
          >
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </Row>
        <Row>
          {services.map((service) => (
            <Col md={4}>
              <ServiceCard
                img={service.img}
                title={service.title}
                body={service.body}
                width={service.width}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ServiceSection
