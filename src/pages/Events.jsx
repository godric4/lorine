import React from 'react'
import styled from 'styled-components'
import { MiniHero } from '../components'

const Events = () => {
 return (
  <Wrapper>
   <MiniHero title='Events' />
   <h1>Events</h1>
  </Wrapper>
 )
}

export default Events


const Wrapper = styled.section`
 margin-top: -1rem;
  min-height: 100vh;
  padding-top: 5rem;
`
