import React, { useContext } from 'react'
import styled from 'styled-components'
import { FilterContext } from '../../context/filter_context'
import ProductCard from './ProductCard'


const ProductList = () => {
 const { filtered_products: products } = useContext(FilterContext)

 if (products.length < 1) {
  return (
   <h5 style={{ textTransform: 'none' }} className='vh-100 text-center'>
    Sorry, no products matched your search.
   </h5>
  )
 }

 return (
  <Wrapper className=''>
   <div className='container'>
    <div className='row'>
     {products.map((product) => {
      return <ProductCard key={product.id} {...product} />
     })}
    </div>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.div`
 
`

export default ProductList
