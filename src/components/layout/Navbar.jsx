import React from 'react'
import { FaBirthdayCake } from 'react-icons/fa'
import styled from 'styled-components'
import CartButtons from '../cart/CartButtons'

const Navbar = () => {
 return (
  <Wrapper>
   <div className="nav-header container">
    <h2 className="title">
     JoyCakes <span><FaBirthdayCake /></span>
    </h2>
    <CartButtons />
   </div>

  </Wrapper>
 )
}

const Wrapper = styled.nav`

 color: var(--light);
 position:fixed;
 z-index: 10;
 width: 100vw;

 .nav-header {
  margin-top: .5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
 }

`

export default Navbar
