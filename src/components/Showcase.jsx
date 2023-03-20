import React from 'react'
import styled from 'styled-components'
import data from '../utils/data'

const Showcase = () => {
 console.log(data)
 return (
  <Wrapper>
   <div className="container">
    <h1 className="top-title">Our Products</h1>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.section`
 
`

export default Showcase
