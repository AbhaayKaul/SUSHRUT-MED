import React, { useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import classes from '../assets/css/Card.module.css'
import '../assets/css/Card.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import LeftCardChild from '../assets/images/first.png'
import LeftCardParent from '../assets/images/fourth.png'

const Card = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <div>
      <Container className={classes.container1}>
        <Row>
          <Col className={classes.colstyle}>
            <Image
              data-aos="fade-right"
              className={classes.backgroundcard}
              src={LeftCardParent}
              fluid
            />
            <Image
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic"
              className={classes.leftchildcard}
              src={LeftCardChild}
              fluid
            />
          </Col>
          <Col data-aos="fade-left" className={classes.leftcolstyle}>
            <h1 className={classes.heading}>
            Connect with the doctor
            </h1>

            <span className={classes.content}>
              {' '}
              A doctor is auto-assigned to you that best matches your concern.
              You will get a diagnosis and treatment for your condition.
              Skip the struggle of booking appointments.
Consult a doctor at your ease
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Card