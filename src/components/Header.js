import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <a href=''>
        <img src='/images/logo.svg' alt='' />
      </a>
      <Menu>
        <a href='#'>Model S</a>

        <a href='#'>Model X</a>

        <a href='#'>Model Y</a>

        <a href='#'>Model 3</a>

        <a href='#'>Model 4</a>
      </Menu>

      <RightMenu>
        <a href=''>Shop</a>
        <a href=''>Tesla Account</a>
      </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  right: 0;
  min-height: 60px;
  position: fixed;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 0 20px;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  a {
    display: flex;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    padding: 0 10px;
    flex-wrap: nowrap;
    flex: 1;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    &:hover {
      color: #f5f5f5;
      transition: 1s;
      transform: scale(1.1);
      transition-timing-function: ease-in-out;
    }
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  padding: 0 20px;
  flex-wrap: nowrap;
  flex: 1;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  a {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    padding: 0 10px;
    flex-wrap: nowrap;
    flex: 1;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
  }

  &:hover {
    color: #fff;
  }
`
