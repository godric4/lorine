import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import errorBg from '../assets/images/404-V3.png'

const Error = () => {
  return (
    <Wrapper>
      <div className='container error'>
        <div className='center'>
          <img src={errorBg} alt='' />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: calc(100vh - 4rem);
  .center {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  img {
    /* width: 100vw; */
    height: 80vh;
  }
`

export default Error
