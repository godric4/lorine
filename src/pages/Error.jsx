import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import errorBg from '../assets/images/404.jpg'

const Error = () => {
 return (
  <Wrapper>
   <img src={errorBg} alt='' />
   <div className='container error'>
    <p>
     The page you are looking for does not exist, navigate back to our home
     page
    </p>
    <Link to='/' className='my-btn link'>
     Back to Home
    </Link>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 5.5rem);
  text-align: center;
  img {
    width: 100vw;
  }

  .link a:hover {
    background-color: var(--gray-light);
  }

  @media screen and (min-width: 992px) {
    img {
      width: 600px;
    }
  }
`

export default Error
