import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({
  title,
  description,
  backgroundImage,
  leftButtonText,
  rightButtonText,
}) {
  return (
    <Wrap bgImage={backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade left>
          <ButtonGroup>
            <Leftbutton>{leftButtonText}</Leftbutton>
            <Rightbutton>{rightButtonText}</Rightbutton>
          </ButtonGroup>
        </Fade>
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ItemText = styled.div`
  padding-top: 30vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 60vh;
  margin-bottom: 25vh;
  align-items: center;
  flex-direction: column;
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
    flex-direction: column;
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

const Buttons = styled.div`
  display: flex;
`
