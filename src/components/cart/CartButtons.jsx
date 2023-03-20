import React from 'react'
import styled from 'styled-components'
import { FaShoppingBasket } from 'react-icons/fa'


const CartButtons = () => {
 return (
  <Wrapper>
   <div className="cart-btn">
    <FaShoppingBasket />
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.div``

export default CartButtons
