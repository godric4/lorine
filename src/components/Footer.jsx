import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <p>devgodric, fena webworks </p>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: var(--dark);
  color: var(--light);
  height: 4rem;
  text-align: center;
`
export default Footer
