import React from 'react'
import { Navbar , Nav , Container} from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
    const navigate = useNavigate()
  return (
    <div>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick = {()=>navigate('/home')}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/users')}>Users</Nav.Link>
            <Nav.Link onClick={()=>navigate('/admin')}>Admin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar