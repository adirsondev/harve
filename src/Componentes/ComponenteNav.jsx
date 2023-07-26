import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ComponenteNav() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
          <img
              src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/hyjcuwf0mdaaefw4xeig"
              width="120"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Produtos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ComponenteNav;