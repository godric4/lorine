import React from 'react'
import styled from 'styled-components'

const Loading = () => {
 return (
  <Wrapper>
   <div className='container text-center'>
    <div className='loading'></div>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.div`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 4rem;
    height: 4rem;
    margin: 0 auto;
    margin-top: 10rem;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top-color: var(--dark);
    animation: spinner 0.6s linear infinite;
  }
`

export default Loading
