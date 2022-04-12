// import React, { useState } from 'react'
// import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
// import '../assets/css/Header.css'
// import brand_blue_logo from '../assets/images/brand-logo-blue.png'

// const Header = () => {
//   const [navBar, setNavBar] = useState(false)

//   const setBackgoundColor = () => {
//     if (window.scrollY >= 70) {
//       setNavBar(true)
//     } else {
//       setNavBar(false)
//     }
//   }

//   window.addEventListener('scroll', setBackgoundColor)

//   return (
//     <div>
//       <Navbar
//         bg="light"
//         expand="lg"
//         fixed="top"
//         className={navBar ? 'active' : 'navBar'}
//       >
//         <Container fluid>
//           <Navbar.Brand href="#" className="navbar-title mx-5">
//             <Image
//               src={brand_blue_logo}
//               alt="Sushrut Logo"
//               height="100px"
//               className="brand-logo"
//             />
//             <span>Uश्रुत</span>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto navbar-items">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link">Link</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">
//                   Something
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//             <Nav className="ms-auto navbar-items">
//               <Nav.Link href="#home">Login</Nav.Link>
//               <Nav.Link href="#home">Signup</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   )
// }

// export default Header
import React, { useState } from 'react'
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import '../assets/css/Header.css'
import brand_blue_logo from '../assets/images/brand-logo-blue.png'
import Signin from './Signin'
import Signup from './Signup'
import Backdrop from './Backdrop'

const Header = () => {
  const [navBar, setNavBar] = useState(false)

  const [loginIsOpen, setLoginIsOpen] = useState(false)

  // useEffect(() => {
  //   Aos.init({ duration: 2000 })
  // }, [])

  const [signupIsOpen, setSignupIsOpen] = useState(false)

  function loginHandler() {
    setLoginIsOpen(true)
  }

  function removeLogin() {
    setLoginIsOpen(false)
  }

  function signupHandler() {
    setSignupIsOpen(true)
  }

  function removeSignup() {
    setSignupIsOpen(false)
  }

  const setBackgoundColor = () => {
    if (window.scrollY >= 70) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }

  window.addEventListener('scroll', setBackgoundColor)

  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        fixed="top"
        className={navBar ? 'active' : 'navBar'}
      >
        <Container fluid>
          <Navbar.Brand href="#" className="navbar-title mx-5">
            <Image
              src={brand_blue_logo}
              alt="Sushrut Logo"
              height="100px"
              className="brand-logo"
            />
            <span>Uश्रुत</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar-items">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto navbar-items">
              <button className="btn" onClick={loginHandler}>
                Signin
              </button>
              {loginIsOpen && <Signin scrollable={true} />}
              {loginIsOpen && <Backdrop onClick={removeLogin} />}
              <button className="btn" onClick={signupHandler}>
                Signup
              </button>
              {signupIsOpen && <Signup scrollable={true} />}
              {signupIsOpen && <Backdrop onClick={removeSignup} />}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
