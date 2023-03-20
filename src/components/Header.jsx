import React from 'react'
import styled from 'styled-components'
import headerBg from '../assets/images/kapoor.jpg'
import Hero from './Hero'
import Navbar from './Navbar'

const Header = () => {
 return (
  <Wrapper>
   <Navbar />
   <Hero />
  </Wrapper>
 )
}

const Wrapper = styled.header`
height: 90vh;
width: 100vw;
background:linear-gradient( 
 to right bottom, 
 rgba( 210,105,30, 0.9), 
 rgba(222, 184, 135, 0.5)), url(${headerBg}) ; 
background-repeat: no-repeat;
background-position: center;
background-size: cover;

clip-path: polygon(0 0, 100% 0, 100% 70vh, 0 100%);

`

export default Header
