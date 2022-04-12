import React, { useState } from 'react'
import { Form, Button, Row, Col, Container, Image } from 'react-bootstrap'

import classes from '../assets/css/Modal.module.css'
import signupImage from '../assets/images/signinimage.png'

const Signup = () => {
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [licenseNumber, setLicenseNumber] = useState(0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [userType, setUserType] = useState('1')
  const [error, setError] = useState(false)
  const [isDoctor, setIsDoctor] = useState(false)

  return (
    <Container className={classes.signupModal}>
      <Row>
        <Col className={classes.imageCol}>
          <Image src={signupImage} />
        </Col>
        <Col className={classes.formCol}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Sign Up As</Form.Label>
              <Form.Select
                enabled
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="rounded-pill"
              >
                <option value="1">Patient</option>
                <option value="2">Admin</option>
                <option value="3">Doctor</option>
              </Form.Select>
            </Form.Group>

            {isDoctor && (
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>License Number</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  type="Number"
                  placeholder="Enter License Number"
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                />
                <Form.Text className="text-visible"></Form.Text>
              </Form.Group>
            )}

            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className="rounded-pill"
                type="text"
                placeholder="Enter First Name"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
              <Form.Text className="text-visible"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                className="rounded-pill"
                type="text"
                placeholder="Enter Last Name"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
              <Form.Text className="text-visible"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="rounded-pill"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="rounded-pill"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="rounded-pill"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button className={classes.btn1} variant="primary" type="submit">
              submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup
