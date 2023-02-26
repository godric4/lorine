import React, { useContext } from 'react'
import styled from 'styled-components'
import { FilterContext } from '../context/filter_context'
import Product from './Product'

const ProductList = () => {
  const { filtered_products: products, grid_view } = useContext(FilterContext)

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
            const { id, image, name, price, description } = product
            return <Product key={product.id} {...product} />
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    transition: var(--transition);
    height: 200px;
  }
`

export default ProductList
