import React from 'react'
import styled from 'styled-components'
import headerBg from '../../assets/images/kapoor.jpg'
import Hero from '../Hero'
import Navbar from './Navbar'

const Header = () => {
 return (
  <Wrapper>
   <Hero />
  </Wrapper>
 )
}

const Wrapper = styled.header`
margin-top: -1rem;
height: 95vh;
background:linear-gradient( 
 to right bottom, 
 rgba( 108,0,12, 0.7), 
 rgba(108,0,12, 0.5)), url(${headerBg}) ; 
background-repeat: no-repeat;
background-position: center;
background-size: cover;

clip-path: polygon(0 0, 100% 0, 100% 70vh, 0 100%);

`

export default Header
