import React from 'react'
import styled from 'styled-components'
import { Footer, MiniHero, ProductList } from '../components'

const Shop = () => {
  return (
    <main>
      <Wrapper className='containe'>
        <MiniHero title='products' />
        <ProductList />
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  padding-top: 5rem;
`

export default Shop
