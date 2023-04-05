import React from 'react'
import styled from 'styled-components'
import { Filters, MiniHero, ProductList, Sort } from '../components'

const Products = () => {
 return (
  <Wrapper>
   <MiniHero title='Products' />
   <Filters />
   <Sort />
   <ProductList />
  </Wrapper>
 )
}

export default Products


const Wrapper = styled.section`
 margin-top: -1rem;
  min-height: 100vh;
  padding-top: 5rem;
`
