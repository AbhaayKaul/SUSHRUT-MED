import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import '../assets/css/ServiceCard.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ServiceCard = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <Card className="my-3 mx-4" data-aos="fade-down">
      <Card.Img
        variant="top"
        src={props.img}
        style={{ width: props.width }}
        className="my-3 mx-3"
      />
      <Card.Title className="my-3 mx-3">{props.title}</Card.Title>
      <Card.Body>{props.body}</Card.Body>
    </Card>
  )
}

export default ServiceCard
