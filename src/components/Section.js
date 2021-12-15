import React from 'react'
import styled from 'styled-components'

function Section() {
  return <wrap>section</wrap>
}

export default Section

const wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
