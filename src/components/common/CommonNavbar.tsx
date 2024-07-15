import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';


interface ICommonNavbarProps {
}

const CommonNavbar: React.FunctionComponent<ICommonNavbarProps> = (props) => {
  return (

      <Navbar expand="lg" className="bg-primary text-white" fixed="top" >
        <Container fluid >

        <Navbar.Brand href="/" className="text-white">Deutsche Verben</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="text-white" />
        <Navbar.Collapse id="navbarScroll" className="text-white">
          <Nav
            className="justify-content-end flex-grow-1 pe-3 text-white"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className="text-white">Главная</Nav.Link>
            <Nav.Link href="/table" className="text-white">Таблица глаголов</Nav.Link>
            <Nav.Link href="/memo" className="text-white">Мемо карты</Nav.Link>
            <Nav.Link href="/test" className="text-white">Тест</Nav.Link>

          </Nav>
        </Navbar.Collapse>
        </Container>

      </Navbar>

  );
};

export default CommonNavbar;
