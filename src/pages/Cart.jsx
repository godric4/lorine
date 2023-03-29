import React from 'react'
import styled from 'styled-components'
import { MiniHero } from '../components'
import { Link } from 'react-router-dom'

const Cart = () => {
 return (
  <Wrapper>
   <MiniHero title='Your Cart' />
   <h1>Cart</h1>
  </Wrapper>
 )
}

export default Cart


const Wrapper = styled.section`
 margin-top: -1rem;
  min-height: 100vh;
  padding-top: 5rem;
`
