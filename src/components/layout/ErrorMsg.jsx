import React from 'react'
import styled from 'styled-components'

const ErrorMsg = () => {
 return (
  <Wrapper>
   <div className='container text-center'>
    <div className='error'>
     <h4>There was an error loading resource</h4>
    </div>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.div``

export default ErrorMsg
