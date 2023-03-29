import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import AmountButtons from './AmountButtons'
import { useCartContext } from '../../context/cart_context'

const AddToCart = ({ product }) => {
 // add to cart
 const { addToCart } = useCartContext()
 const { id, stock } = product

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
   if (tempAmount < 1) {
    tempAmount = 1
   }
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
     className='my-btn btn'
     onClick={() => addToCart(id, amount, product)}
    >
     add to cart
    </Link>
   </div>
  </Wrapper>
 )
}
const Wrapper = styled.section`
  /* margin-top: 2rem; */
  
  .btn-container {
    margin-top: -1rem;
  }

  .btn {
    margin-top: 0rem;
    width: 140px;
  }
`
export default AddToCart
