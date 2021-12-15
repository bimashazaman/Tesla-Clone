import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Header() {
  return (
    <Container>
      <a href=''>
        <img src='/images/logo.svg' alt='' />
      </a>
      <Menu>
        <a href='#'>Model S</a>

        <a href='#'>Model X</a>

        <a href='#'>Model 3</a>

        <a href='#'>Model 4</a>
      </Menu>

      <RightMenu>
        <a href=''>Shop</a>
        <a href=''>Account</a>
        <CustomMenu></CustomMenu>
      </RightMenu>
      <BurgerNav>
        <CloseWraper>
          <CustomClose>
            <CloseIcon />
          </CustomClose>
        </CloseWraper>

        <li>
          <a href='#'>Existing Inventory</a>
        </li>
        <li>
          <a href='#'>USE Inventory</a>
        </li>
        <li>
          <a href='#'>TRANDING</a>
        </li>
        <li>
          <a href='#'>Cybertrack</a>
        </li>
        <li>
          <a href='#'>Roadside</a>
        </li>
      </BurgerNav>
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
  z-index: 1;
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
      color: black;
      padding: 10px;
      border: 2px;
      border: none;
      border-radius: 100px;
      background-color: #dcdcdc;
      transition: 0.1s;
      transition-timing-function: ease-in-out;
      cursor: pointer;
      opacity: 0.8;
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
    color: #696969;
    transition: 1s;
    transform: scale(1.1);
    transition-timing-function: ease-in-out;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  /* display: none; */
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  /* opacity: 0.8; */
  width: 300px;
  height: 100%;
  list-style: none;
  z-index: 16;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;

  li {
    margin-bottom: 20px;
    border-bottom: 2px solid #d3d3d3;
    padding: 10px;
  }
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
    &:hover {
      color: black;
      padding: 10px;
      border: 2px;
      border: none;
      border-radius: 100px;
      background-color: #dcdcdc;
      transition: 0.1s;
      transition-timing-function: ease-in-out;
      cursor: pointer;
      opacity: 0.8;
    }
  }
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;

  &:hover {
    color: red;
    transition: 1s;
    transform: scale(1.1);
    transition-timing-function: ease-in-out;
  }
`

const CloseWraper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`
