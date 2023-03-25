import React, { useContext } from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../../context/products_context'
import Loading from '../layout/Loading'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import ErrorMsg from '../layout/ErrorMsg'

const Featured = () => {

 const { products_loading, products_error, featured_products } = useProductsContext()

 if (products_loading) {
  return <Loading />
 }

 if (products_error) {
  return <ErrorMsg />
 }

 return (
  <Wrapper>
   <div className='container featured mt-5'>

    <div className='container'>
     <div className='row'>
      {featured_products.map((product) => {
       return <ProductCard key={product.id} {...product} />
      })}

     </div>
    </div>
    <Link to='/products' className='my-btn mt-4'>
     View More products
    </Link>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.section` 
 
  .featured {
    text-align: center;
  }

  img {
    height: 225px;
  }

  @media screen and (max-width: 576px) {
    img {
      height: 125px;
    }
  }
`

export default Featured
