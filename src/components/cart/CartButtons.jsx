import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cart_context'
import { useUtilsContext } from '../../context/utils_context'
import { useUserContext } from '../../context/user_context'


const CartButtons = () => {
 const { closeSidebar } = useUtilsContext()
 const { total_items, clearCart } = useCartContext()
 const { loginWithRedirect, myUser, logout } = useUserContext()

 return (
  <Wrapper className='cart-btn-wrapper'>
   <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
    <span className='cart-container'>
     <FaShoppingCart className='mx-3' />
     <span className='cart-value'>{total_items}</span>
    </span>
   </Link>
   {
    myUser ? <button
     type='button'
     className='auth-btn'
     onClick={() => {
      clearCart()
      logout({ returnTo: window.location.origin })
     }}
    >
     <span>Logout</span>  <FaUserMinus />
    </button> : <button type='button' className='auth-btn' onClick={loginWithRedirect} >
     <span>Login</span> <FaUserPlus />
    </button>
   }


  </Wrapper>
 )
}

const Wrapper = styled.div`

display: flex;

.cart-btn {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }

  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
      margin-top: 10px;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
   }

    .cart-value {
    position: absolute;
    top: -10px;
    right: 0px;
    background: red;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    padding: 12px;
  }

  .auth-btn {
    background: transparent;
    border-color: transparent;
    border-bottom: 1px solid white;
    font-size: 1rem;
    cursor: pointer;
     color: var(--light); 
       margin-left: 5px;
   
    svg {
      margin-left: 5px;
    }
  } 
`

export default CartButtons
