import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductsContext } from '../../context/products_context'
import Loading from '../Loading'
import ErrorWarn from '../ErrorWarn'
import Product from '../Product'
import { Link } from 'react-router-dom'

const Featured = () => {
  const { products_loading, products_error, featured_products } =
    useContext(ProductsContext)

  if (products_loading) {
    return <Loading />
  }

  if (products_error) {
    return <ErrorWarn />
  }

  return (
    <Wrapper>
      <div className='container featured mt-5'>
        <h2 className='top-title'>Our Featured Bites</h2>

        <div className='container'>
          <div className='row'>
            {featured_products.map((product) => {
              return <Product key={product.id} {...product} />
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
