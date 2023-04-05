import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../../context/filter_context'
import { getUniqueValues, formatPrice } from '../../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
 const {
  filters: {
   text,
   category,

  },
  updateFilters,
  all_products,
  clearFilters,
 } = useFilterContext()

 const categories = getUniqueValues(all_products, 'category')
 return (
  <Wrapper>
   <div className='content'>
    <form onSubmit={(e) => e.preventDefault()}>
     {/* search input */}
     <div className='form-control search-bar'>
      <input
       type='text'
       name='text'
       value={text}
       placeholder='search products'
       onChange={updateFilters}
       className='search-input'
      />
     </div>
     {/* end of search input */}
     {/* category */}
     <div className='form-control'>
      <h5 className='top-title'>Categories</h5>
      <div className='container'>
       <div className="row">
        {categories.map((c, index) => {
         return (

          <div className="col my-btn m-1 text-center btn-container" key={index}>
           <button

            onClick={updateFilters}
            type='button'
            name='category'
            className={`${category === c.toLowerCase() ? 'active ' : null
             }`}
           >
            {c}
           </button>
          </div>

         )
        })}
       </div>
      </div>
     </div>
     {/* end of category */}



    </form>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.section`
.top-title {
 margin-top: -1rem;
}
  .form-control {
    margin-bottom: 1.25rem;
    border: none;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-bar {
   text-align: center;
  }
  .search-input {
    padding: 0.5rem;
    width: 75%;
    border-radius: 25px;
    border-color: black;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  .btn-container {
   display: flex;
   justify-content: center;
   align-items: center;
  }

  button {
    display: block;
    margin: 0.1rem 0;
    padding: 0.1rem 0;
    text-transform: capitalize;
    background: transparent;
    border: black;
    border-bottom: 1px solid transparent;
    color: white;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    width: 100%;
  }

  button:hover {
   color: var(--dark);
  }
  /* .active {
    border-color: white;
  } */
  
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
 
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
