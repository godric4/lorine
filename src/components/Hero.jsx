import React, { useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
 useEffect(() => {
  AOS.init()
  AOS.refresh()
 }, [])
 return (
  <Wrapper>
   <div className="container">
    <h4>
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
  </Wrapper>
 )
}


const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 90%;
text-align:center;
color: white;

h1 {
    color: var(--light);
    font-size: 3rem;
    margin-top: -1rem;
  }
  h4 span {
    color: var(--gray);
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
    margin-left: .5rem;
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
