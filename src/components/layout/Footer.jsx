import React from 'react'
import styled from 'styled-components'

const Footer = () => {
 return (
  <Wrapper>
   <p>
    devgodric @fena_ webworks Copyright &copy;
    {new Date().getFullYear()}{' '}
   </p>
  </Wrapper>
 )
}

const Wrapper = styled.footer`
  background-color: var(--dark);
  color: var(--light);
  height: 4rem; 
  text-align: center;
  margin-top: 1.5rem;
  display: flex;
  place-items: center;
  justify-content: center;
`
export default Footer
