import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'

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
        <a href=''>Account</a>
        <CustomMenu></CustomMenu>
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
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 20px;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex: 1;

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

    @media (max-width: 768px) {
      display: none;
    }
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    opacity: 1;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }

  &:hover {
    color: #fff;
    transition: 1s;
    transform: scale(1.1);
    transition-timing-function: ease-in-out;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
