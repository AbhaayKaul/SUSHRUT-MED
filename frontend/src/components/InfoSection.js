import React, { useEffect } from 'react'
import SideCarousel from './SideCarousel'
import { Row, Col, Image } from 'react-bootstrap'
import TypeWriter from './TypeWriter'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../assets/css/InfoSection.css'
import info_1 from '../assets/images/info-1.png'
import info_2 from '../assets/images/info-2.png'
import info_3 from '../assets/images/info-3.png'
import info_4 from '../assets/images/info-4.png'
import doctor_img from '../assets/images/info-doctor.png'
import patient_img from '../assets/images/info-patient.png'

const InfoSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <>
      <Row className="features">
        <Col md={2}></Col>
        <Col md={4}>
          <h1 className="info-headings">
            <TypeWriter
              arr={[
                'We have deep healthcare experience',
                'The first wealth is health',
                'A healthy outside starts from the inside',
              ]}
            />
          </h1>
        </Col>
        <Col md={3}></Col>
        <Col md={3} className="ms-auto">
          <SideCarousel />
        </Col>
      </Row>
      <Row>
        <h2 className="text-center my-4">Why Choose Us ?</h2>
        <Col
          data-aos="zoom-in"
          data-aos-delay="0"
          md={3}
          className="text-center info"
        >
          <Image src={info_1} className="info-img" />
          <h5>More experience</h5>
        </Col>
        <Col
          data-aos="zoom-in"
          data-aos-delay="300"
          md={3}
          className="text-center info"
        >
          <Image src={info_2} className="info-img" />
          <h5>The right answers</h5>
        </Col>
        <Col
          data-aos="zoom-in"
          data-aos-delay="600"
          md={3}
          className="text-center info"
        >
          <Image src={info_3} className="info-img" />
          <h5>Seamless care</h5>
        </Col>
        <Col
          data-aos="zoom-in"
          data-aos-delay="900"
          md={3}
          className="text-center info"
        >
          <Image src={info_4} className="info-img" />
          <h5>Unparalleled expertise</h5>
        </Col>
      </Row>
      <Row className="my-5 ">
        <Col md={6} className="text-center info-patients">
          <Image src={patient_img} className="info-img" />
          <h4>For Patients</h4>
        </Col>
        <Col md={6} className="text-center info-doctor">
          <Image src={doctor_img} className="info-img" />
          <h4>For Providers</h4>
        </Col>
      </Row>
    </>
  )
}

export default InfoSection
