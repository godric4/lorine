import React from 'react'
import styled from 'styled-components'
import data from '../../utils/data'
import ProductCard from './ProductCard'

const Showcase = () => {

 return (
  <Wrapper>

   <h1 className="top-title mt-4">Featured Products</h1>
   <div className="container">
    <div className="row">
     {
      data.map((product) => {
       return <ProductCard key={product.id} {...product} />
      })
     }
    </div>
   </div>
  </Wrapper >
 )
}

const Wrapper = styled.section`
 
`

export default Showcase
