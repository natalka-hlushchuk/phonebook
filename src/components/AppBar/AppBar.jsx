import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Navigation, AuthNav, UserMenu } from 'components/index';
import { selectIsLoggedIn } from 'redux/selectors';
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        className="mb-3"
        style={{ color: 'white', backgroundColor: '#81377b' }}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Container>
              <Nav className="d-flex justify-content-between w-100">
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
