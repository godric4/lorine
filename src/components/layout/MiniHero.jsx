import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const MiniHero = ({ title, product }) => {
 return (
  <Wrapper>
   <div className='container'>
    <p>
     <Link to='/'>Home </Link>
     {product && <Link to='/products'>/ Products</Link>}/ {title}
    </p>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;

  a {
    color: var(--dark);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: black;
  }

  @media screen and (max-width: 473px) {
    font-size: 0.8rem;
  }
`

export default MiniHero
