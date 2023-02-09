import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styled from 'styled-components'
import cake from '../../assets/images/cakeBg.png'

const Hero = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <Wrapper>
      <div className='container hero'>
        <div className='text-half'>
          <h4 className='line-one'>
            Our <span>tasty treats and desserts</span>
          </h4>
          <h1
            data-aos='zoom-in'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            IS YOUR BEST CHOICE
          </h1>
          <button className='my-btn mx-1 order-btn'>Order Now</button>
          <button className='my-btn mx-1 menu-btn'>See All Menus</button>
        </div>
        <div className='img-half'>
          <img src={cake} alt='Hero Cake' />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  padding-top: 3rem;
  background-color: var(--light);
  overflow: hidden;

  .hero {
    display: flex;
    place-items: center;

    flex-direction: column;
    text-align: center;
  }

  .text-half {
    padding-top: 3.2rem;
  }

  .img-half {
    padding-top: 1rem;
  }

  h1 {
    color: var(--dark);
    font-size: 3rem;
    margin-top: -1rem;
  }
  h4 span {
    color: var(--dark);
    font-family: 'ephesis';
    font-size: 3rem;
    font-weight: 600;
  }

  .order-btn:hover {
    background-color: var(--gray-light);
    color: var(--dark);
    border: 1px solid var(--dark);
  }
  .menu-btn {
    background-color: var(--gray-light);
    color: var(--dark);
    border: 1px solid var(--dark);
  }

  .menu-btn:hover {
    color: var(--gray-light);
    background-color: var(--dark);
    border: 1px solid var(--dark);
  }

  @media screen and (max-width: 768px) {
    h4 span {
      font-size: 2.5rem;
    }
  }
`

export default Hero
