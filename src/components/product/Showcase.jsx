import React from 'react'
import styled from 'styled-components'
import Featured from './Featured'
const Showcase = () => {

 return (
  <Wrapper>

   <h1 className="top-title mt-4">Featured Products</h1>
   <div className="container">
    <div className="row">
     <Featured />
    </div>
   </div>
  </Wrapper >
 )
}

const Wrapper = styled.section`
 
`

export default Showcase
