import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assests/img/logo.webp';

function NavBar() {
  return (
    <Navbar fixed="top" bg = "dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary navbar-fixed-top ">
      <Container>
        <Navbar.Brand href="#home"> 
        <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            PokeDex</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;