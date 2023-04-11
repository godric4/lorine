import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../../context/cart_context'
import { useUserContext } from '../../context/user_context'
import { formatPrice } from '../../utils/helpers'
import { Link } from 'react-router-dom'
const CartTotals = () => {
 const { total_amount, shipping_fee } = useCartContext()
 const { myUser, loginWithRedirect } = useUserContext()

 return (
  <Wrapper className='container'>
   <div>
    <article>
     <hr />
     <h6>
      order total :<span>{formatPrice(total_amount)}</span>
     </h6>
    </article>
    {myUser ? (
     <Link to='/checkout' className='btn'>
      proceed to checkout
     </Link>
    ) : (
     <button onClick={loginWithRedirect} className='btn my-btn'>
      login
     </button>
    )}
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--dark);
    border-radius: 15px;
    padding: .4rem 1rem;
  }
  h4,
  h5,
  /* p {
    display: grid;
    grid-template-columns: 200px 1fr;
  } */
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
    background: var(--dark);
    color: var(--gray-light)
  }


`

export default CartTotals
