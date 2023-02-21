import React from 'react'
import styled from 'styled-components'
import { Featured, Hero, IconMsg, Reviews } from '../components'
import babe from '../assets/images/babe.jpg'
import { FaWhatsapp } from 'react-icons/fa'

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <IconMsg />
      <Featured />
      <div className='contact container'>
        <h2 className='top-title text-center pt-3 mt-3'>
          Want a Custom Cake???
        </h2>
        <div className='container custom '>
          <img src={babe} alt='' width={'225px'} className='mx-1 mt-2' />
          <div className='mx-1 mt-2'>
            <p>
              If you want to create a cake that is not on our catalogue or you
              wiish to make specific designs to suit your needs and occassion.
            </p>
            <p>
              Kindly give us a buzz on whatsapp or drop your contact details.
              Our manager will contact you to clarify the details.
            </p>

            {/* <FaWhatsapp />
            <FaWhatsapp /> */}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  overflow-x: hidden;
  .custom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30rem;
    text-align: justify;
  }

  .custom p {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 576px) {
    .custom {
      flex-direction: column;
      width: 90vw;
    }

    .custom img {
      width: 100%;
    }
  }
`

export default Home
