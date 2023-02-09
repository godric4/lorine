import React from 'react'
import styled from 'styled-components'
import { Featured, Hero, Reviews } from '../components'

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Featured />
      <Reviews />
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default Home
