import React, { useState, useEffect } from 'react'
import classes from '../assets/css/Modal.module.css'
import { Form, Button, Row, Col, Image, Container } from 'react-bootstrap'
import Message from './Message'
import modalImage from '../assets/images/signinimage.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../assets/css/Modal.module.css'

const Signin = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('1')
  const [authenicated, setIsAuthenticated] = useState(false)
  return (
    <Container data-aos="zoom-in" className={classes.signinModal}>
      <Row className={classes.rowStyling}>
        <Col className={classes.imageCol}>
          <Image className={classes.imageStyling} src={modalImage} fluid />
        </Col>

        <Col className={classes.formCol}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className={classes.formLabel}>Sign In As</Form.Label>
              <Form.Select
                enabled
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="rounded-pill"
              >
                <option value="1">Patient</option>
                <option value="2">Doctor</option>
                <option value="3">Admin</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={classes.formLabel}>
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-pill"
              />
              <Form.Text className={classes.textmuted}>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className={classes.formLabel}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-pill"
              />
            </Form.Group>
            {authenicated && (
              <Message variant="warning" children="Wrong Credentials" />
            )}
            <Button variant="primary" type="submit" className={classes.btn1}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Signin
