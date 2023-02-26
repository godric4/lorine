import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'
const AddToCart = ({ product }) => {
  // add to cart
  const { addToCart } = useContext(CartContext)

  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1
      return tempAmount
    })
  }
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      return tempAmount
    })
  }
  return (
    <Wrapper>
      <div className='btn-container'>
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />

        <Link
          to='/cart'
          className='my-btn'
          onClick={() => addToCart(id, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }

  .btn-container {
    margin-top: 2rem;
  }

  .my-btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
