import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import test from '../assets/images/cakeBg.png'
import { formatPrice } from '../utils/helpers'

const Product = ({ id, image, name, price }) => {
  return (
    <Wrapper className=' col-sm-4 col-6 product my-2'>
      <div className='container'>
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className='link'>
          <FaShoppingBag />
        </Link>
      </div>
      <div className='desc'>
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
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--light);
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
      color: var(--dark);
    }
  }
  .container:hover img {
    opacity: 0.5;
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
  }

  .desc p {
    margin-bottom: 0;
    font-weight: 400;
  }
`

export default Product
