import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { formatPrice } from '../../utils/helpers'

const ProductCard = ({ name, id, image, price }) => {

 console.log(image)

 return (
  <Wrapper className='col-sm-3 col-6 mb-3'>
   <div className="container">
    <img src={image} alt={name} />
    <Link to={`/products/${id}`} className='link'>
     <FaShoppingBag />
    </Link>
   </div>
   <div className='desc text-center'>
    <p className='name'>{name}</p>
    <p>{formatPrice(price)}</p>
   </div>
  </Wrapper>
 )
}


const Wrapper = styled.div`
 .container {
    position: relative;
    background: var(--gray-light);
    padding: 1rem;
  }
 img {
    width: 100%;
    display: block;
    object-fit: cover;
    transition: var(--transition);
      height: 200px;
     
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--dark);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--light);
    }
  }
  .container:hover img {
    opacity: 0.4;
  }
  .container:hover .link {
    opacity: 1;
  }
  .desc {
    margin-top: 1rem;
  }
  .desc .name {
    font-weight: 700;
    padding: 0 0.2rem;
    color: var(--dark);
    margin-top: -1rem;
  }

  .desc p {
    margin-bottom: 0;
    font-weight: 400;
  }
`

export default ProductCard
