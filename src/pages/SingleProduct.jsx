import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import { ProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  ErrorWarn,
  ProductImages,
  AddToCart,
  MiniHero,
} from '../components'

const SingleProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    getSingleProduct,
  } = useContext(ProductsContext)
  useEffect(() => {
    getSingleProduct(`${url}${id}`)
  }, [id])
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [error])

  if (loading) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    )
  }
  if (error) {
    return <ErrorWarn />
  }

  const { name, price, description, id: product_id, images } = product

  return (
    <Wrapper>
      <MiniHero title={name} product />
      <div className='container'>
        <Link to='/products' className='my-btn mb-2'>
          back to products
        </Link>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <ProductImages images={images} />
            </div>

            <div className='col-md-6'>
              <section className='content'>
                <h2>{name}</h2>

                <h5 className='price'>{formatPrice(price)}</h5>
                <p className='desc'>{description}</p>

                <hr />
                <AddToCart product={product} />
              </section>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding-top: 5rem;
`

const LoadingWrapper = styled.div`
  height: 90vh;

  padding-top: 5rem;
`

export default SingleProduct
