import React from 'react'
import { useFilterContext } from '../../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'
const Sort = () => {
 const {
  filtered_products: products,
  sort,
  updateSort,
 } = useFilterContext()
 return (
  <Wrapper>

   <p>{products.length} products found</p>
   <form>
    <label htmlFor='sort'>sort by</label>
    <select
     name='sort'
     id='sort'
     value={sort}
     onChange={updateSort}
     className='sort-input'
    >
     <option value='price-lowest'>price (lowest)</option>
     <option value='price-highest'>price (highest)</option>
     <option value='name-a'>name (a - z)</option>
     <option value='name-z'>name (z - a)</option>
    </select>
   </form>
   <hr />
  </Wrapper>
 )
}

const Wrapper = styled.section`

text-align: center;
  
  margin-bottom: 2rem;
  
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  
  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`

export default Sort
