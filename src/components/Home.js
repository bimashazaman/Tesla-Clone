import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
      <Section
        tittle='Model S'
        description='Online order for Tesla Model S.'
        backgroundImage='model-s.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Existing Inventory'
      />

      <Section
        tittle='Model Y'
        description='online order for Tesla Model Y.'
        backgroundImage='model-y.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Existing Inventory'
      />

      <Section
        tittle='Model 3'
        description='Online order for Tesla Model 3.'
        backgroundImage='model-3.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Existing Inventory'
      />

      <Section
        tittle='Model X'
        description='Online order for Tesla Model X.'
        backgroundImage='model-x.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Existing Inventory'
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`
