import React from 'react'
import styled from 'styled-components'
import { MiniHero } from '../components'

const About = () => {
 return (
  <Wrapper>
   <MiniHero title='About us' />
   <h1>About</h1>
  </Wrapper>
 )
}

export default About


const Wrapper = styled.section`
 margin-top: -1rem;
  min-height: 100vh;
  padding-top: 5rem;
`
