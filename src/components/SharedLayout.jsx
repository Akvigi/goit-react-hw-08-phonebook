import React, { Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {NavLink, Outlet } from "react-router-dom";
import { logOut } from 'redux/requests';
import styled from "styled-components";
import { PageContainer } from './styled-comp/styled';
// import Nav from 'react-bootstrap/Nav';

import { Nav, Navbar } from 'react-bootstrap';

const StyledLink = styled(NavLink)`
  color: black;
  :not(:last-child){
    margin-right: 40px;
  } 
  &.active {
    color: orange;
  }
`;

const EmailP = styled.p`
  margin: 0 10px 0 0;
`
  

export const SharedLayout = () => {
  const auth = useSelector(store => store.auth)

  const dispatch = useDispatch()

  const onSignOut = async () => {
    dispatch(logOut())
  }
  return (
    <div>
      {/* <Header> */}
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/goit-react-hw-08-phonebook">Site</Navbar.Brand>
        <Nav variant="pills" defaultActiveKey="/goit-react-hw-08-phonebook">
        <Nav.Item>
          <Nav.Link href="/goit-react-hw-08-phonebook">Home</Nav.Link>
        </Nav.Item>
          {auth.isLogin && (
            <Nav.Item>
              <Nav.Link href="/goit-react-hw-08-phonebook/phonebook">Phonebook</Nav.Link>
            </Nav.Item>)}
        {/* <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item> */}
        {!auth.isLogin ? <>
          <Nav.Item><Nav.Link href="/goit-react-hw-08-phonebook/signup">Sign up</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/goit-react-hw-08-phonebook/login">Login</Nav.Link></Nav.Item>
          {/* <StyledLink to="/login">Login</StyledLink> */}
        </> :
          <><EmailP>{auth.user.email}</EmailP><Nav.Item onClick={() => onSignOut()}><Nav.Link href="/goit-react-hw-08-phonebook">Sign out</Nav.Link></Nav.Item> 
            {/* <StyledLink to="/" onClick={() => onSignOut()}>Sign out</StyledLink> */}
          </>}
      </Nav>
      </Navbar>
      
      {/* <StyledLink to="/">Home</StyledLink> */}
            
            
          {/* </Header>  */}
          <Suspense fallback={<Loader>Loading...</Loader>}>
            <PageContainer>
              <Outlet />
            </PageContainer>
          </Suspense>
        </div>
  )
}

const Header = styled.header`
    font-size: large;
    display: flex;
    width: 100%;
    padding: 2% ;
    justify-content: center;
`

const Loader = styled.div`
  font-size: 25px;
  align-items: center;
  display: flex;
  justify-content: center;
`