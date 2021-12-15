import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Header from './Header'

const Home = () => {
  return (
    <Container>
      <Header />
      <Section
        title='Model S'
        description='Online order for Tesla Model S.'
        backgroundImage='model-s.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Existing Inventory'
      />

      <Section
        title='Model Y'
        description='online order for Tesla Model Y.'
        backgroundImage='model-y.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Existing Inventory'
      />

      <Section
        title='Model 3'
        description='Online order for Tesla Model 3.'
        backgroundImage='model-3.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Existing Inventory'
      />

      <Section
        title='Model X'
        description='Online order for Tesla Model X.'
        backgroundImage='model-x.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Existing Inventory'
      />

      <Section
        title='solar roof'
        description='Online order for Tesla solar roof.'
        backgroundImage='solar-roof.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Existing Inventory'
      />

      <Section
        title='New Interior'
        description='Online order for Tesla new interior.'
        backgroundImage='new-interior.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Existing Inventory'
      />

      <Section
        title='Solar-Panels'
        description='Online order for Tesla solar panels.'
        backgroundImage='solar-panel.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Existing Inventory'
      />

      <Section
        title='Game'
        description='Online order for Tesla game.'
        backgroundImage='game.jpg'
        leftButtonText='Custom Order'
        rightButtonText='Existing Inventory'
      />

      <Section
        title='Accessories'
        description='Online order for Tesla accessories.'
        backgroundImage='accessories.jpg'
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
