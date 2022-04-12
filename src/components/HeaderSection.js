import React from 'react'
import { Button, Image } from 'react-bootstrap'
import '../assets/css/Header.css'
import headergif from '../assets/images/header_gif.gif'
import TypeWriter from './TypeWriter'

const HeaderSection = () => {
  return (
    <>
      <div className="header-background"></div>
      <h1 className="header-title">
        We Are Providing Best and Affordable Health Care
      </h1>
      <p className="header-info">
        {
          <TypeWriter
            arr={[
              'Improving lives one person at a time.',
              'Take control of your health',
              'A trusted name for a healthy life',
            ]}
          />
        }
      </p>
      <Image className="header-gif" src={headergif} alt="Header Gif" fluid />
      <Button variant="primary" className="rounded-pill header-btn">
        Book an Appointment
      </Button>
    </>
  )
}

export default HeaderSection
