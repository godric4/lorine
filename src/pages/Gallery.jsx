import React from 'react'
import styled from 'styled-components'
import { MiniHero } from '../components'

const Gallery = () => {
 return (
  <Wrapper>
   <MiniHero title='Gallery' />
   <h1>Gallery</h1>
  </Wrapper>
 )
}

export default Gallery


const Wrapper = styled.section`
 margin-top: -1rem;
  min-height: 100vh;
  padding-top: 5rem;
`
