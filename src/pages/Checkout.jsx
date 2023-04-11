import React from 'react'
import styled from 'styled-components'
import { CheckoutForm, MiniHero } from '../components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const Checkout = () => {
 const { cart } = useCartContext()
 return (
  <Wrapper>
   <MiniHero title='Checkout' />
   {cart.length < 1 ? (
    <div className='empty'>
     <h2>Your cart is empty</h2>
     <Link to='/products' className='my-btn'>
      fill it
     </Link>
    </div>
   ) : (
    <CheckoutForm />)}
  </Wrapper>
 )
}

export default Checkout


const Wrapper = styled.section`
 margin-top: -1rem;
  min-height: 90vh;
  padding-top: 5rem;

  .empty {
   display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  overflow: hidden;
  }
`





