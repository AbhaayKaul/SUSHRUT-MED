import React, { useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import classes from '../assets/css/Card.module.css'
import '../assets/css/Card.module.css'
import RightCardChild from '../assets/images/second.png'
import RightCardParent from '../assets/images/image.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Card = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <div>
      <Container className={classes.container1}>
        <Row>
          <Col data-aos="fade-right" className={classes.colstyle}>
            <h1 className={classes.heading}>
            Start a session
            </h1>

            <span className={classes.content}>
              {' '}
              Select the type of category you would like to consult with the doctor.
              Type in your concern and attach prescription, lab reports if any.
              Help doctor understand your case better. We offer quality healthcare through our network of certified and experienced doctors.


            </span>
          </Col>
          <Col className={classes.colstyle}>
            <Image
              data-aos="fade-left"
              className={classes.backgroundcard}
              src={RightCardParent}
              fluid
            />
            <Image
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic"
              className={classes.childcard}
              src={RightCardChild}
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Card
