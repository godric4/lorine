import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
const CartItems = () => {
 const { cart, clearCart } = useCartContext()

 return (
  <Wrapper className='section container'>
   <CartColumns />
   {cart.map((item) => {
    return <CartItem key={item.id} {...item} />
   })}
   <hr />
   <div className='link-container'>
    <Link to='/products' className='link-btn my-btn'>
     continue shopping
    </Link>
    <button
     type='button'
     className='link-btn my-btn clear-btn'
     onClick={clearCart}
    >
     clear shopping cart
    </button>
   </div>
   <CartTotals />
  </Wrapper>
 )
}
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--gray);
     color: var(--dark);
    font-weight: 400;
    cursor: pointer;
    
  }
  .clear-btn {
    background: var(--dark);   
    color: var(--gray-light);
  }

  .clear-btn:hover {
     background: var(--gray-light);   
     color: var(--dark);   
  }

  
`
export default CartItems
