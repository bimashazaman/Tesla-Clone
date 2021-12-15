import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <container>
      <Section />
    </container>
  )
}

export default Home

const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
