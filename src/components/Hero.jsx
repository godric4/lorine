import React from 'react'
import styled from 'styled-components'

const Hero = () => {
 return (
  <Wrapper>
   <div className="container">
    <h1>Every Bite is <span>Unique</span></h1>
    <p>Let your taste buds Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, et.</p>
   </div>
  </Wrapper>
 )
}


const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 70%;
text-align:center;
color: white;

h1 {
 font-size: 3rem;
}
`

export default Hero
