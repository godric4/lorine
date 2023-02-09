import React from 'react'
import { FaShoppingCart, FaUser, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CartButtons = () => {
  return (
    <Wrapper>
      <Link to='/cart' className='cart-btn'>
        <span className='cart-container mx-1'>
          <FaShoppingCart />
          <span className='cart-value'>12</span>
        </span>
      </Link>
      <button type='button' className='auth-btn'>
        <FaUserPlus />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-right: 1rem;

  .cart-btn {
    font-size: 1.5rem;

    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--dark);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--light);
    padding: 12px;
    font-weight: bold;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 15px;
    }
  }

  @media screen and (min-width: 992px) {
    .cart-btn {
      margin-left: 85px;
    }

    .auth-btn {
      margin-left: 15px;
    }
  }
`

export default CartButtons
