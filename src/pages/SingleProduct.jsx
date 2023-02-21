import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ProductsContext } from '../context/products_context'
const SingleProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useContext(ProductsContext)
  return (
    <Wrapper>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        consectetur alias enim eaque fugit neque, doloribus veniam distinctio
        beatae maiores at placeat explicabo iure recusandae, asperiores
        obcaecati quibusdam? Ex, ut. single
      </h1>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* color: red; */
`

export default SingleProduct
