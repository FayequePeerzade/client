import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent()  {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#">Habit Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="d-flex justify-content-end align-items-center w-100">
            <Nav className="d-flex flex-row align-items-center me-3">
              <Nav.Link href="#home" className="px-2">Home</Nav.Link>
              <Nav.Link href="#features" className="px-2">Profile</Nav.Link>
              <NavDropdown title="More" id="navbarScrollingDropdown" className="px-2">
                <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex" role="search">
              <Form.Control
                type="search"
                placeholder="Search habits"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="primary">Search</Button>
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

