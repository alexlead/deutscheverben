import React from 'react';
import {  Container,  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


interface ICommonNavbarProps {
}

const CommonNavbar: React.FunctionComponent<ICommonNavbarProps> = () => {
  return (

      <Navbar expand="lg" className="bg-primary text-white" fixed="top" >
        <Container fluid >

        <Navbar.Brand className="text-white"><Link to="/" className="text-white link-underline link-underline-opacity-0" >Deutsche Verben</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="text-white" />
        <Navbar.Collapse id="navbarScroll" className="text-white">
          <Nav
            className="justify-content-end flex-grow-1 pe-3 text-white"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>

            <Link to="/" className="text-white link-underline link-underline-opacity-0">Главная</Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="/table" className="text-white link-underline link-underline-opacity-0">Таблица глаголов</Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="/memo" className="text-white link-underline link-underline-opacity-0">Мемо карты</Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="/test" className="text-white link-underline link-underline-opacity-0">Тест</Link>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
        </Container>

      </Navbar>

  );
};

export default CommonNavbar;
