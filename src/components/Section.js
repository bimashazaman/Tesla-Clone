import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Online order for Tesla Model S.</p>
      </ItemText>

      <Buttons>
        <ButtonGroup>
          <Leftbutton>Custom Order</Leftbutton>
          <Rightbutton>Existing Inventory</Rightbutton>
        </ButtonGroup>
      </Buttons>
      <DownArrow src='/images/down-arrow.svg' />
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('/images/model-s.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50vh;
  margin-bottom: 25vh;
  align-items: center;
`
const Leftbutton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  border: none;
  border-radius: 100px;
  padding: 10px;
  margin-right: 20px;
  height: 40px;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;
  text-transform: uppercase;
  margin: 8px;

  &:hover {
    background-color: rgba(23, 26, 32, 0.9);
    transition: 0.3s;
    transform: scale(1.1);
    transition-timing-function: ease-in-out;
  }

  &:active {
    background-color: rgba(23, 26, 32, 0.9);
    transition: 0.3s;
    transform: scale(1.1);
    transition-timing-function: ease-in-out;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`

const Rightbutton = styled(Leftbutton)`
  background-color: white;
  color: black;

  &:hover {
    background-color: BLUE;
    transition: 0.3s;
    transform: scale(1.1);
    transition-timing-function: ease-in-out;
  }
`
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  animation-timing-function: ease-in-out;
  overflow: hidden;
  display: block;
  align-self: center;
`

const Buttons = styled.div`
  display: flex;
`
