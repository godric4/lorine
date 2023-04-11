import React from 'react'
import styled from 'styled-components'
import { ContactForm, MiniHero, SocialIcons } from '../components'
import about from '../assets/images/kapoor.jpg'

const About = () => {
 return (
  <Wrapper>
   <MiniHero title='About Lorine' />
   <div className="container">
    <div className="row" id="about">
     <div className="col-sm-6">
      <img src={about} className="w-100 h-100" alt="Table Setting" width="600"
       height="750" />
     </div>

     <div className="col-sm-6">
      <h3 className="text-center top-title mt-3">Tradition since 1889</h3>
      <p >Lorine was founded in blabla by Mrs. Godrica Erica in lorem ipsum dolor sit amet, consectetur
       adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
       enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
       iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span>seasonal</span> ingredients.</p>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
       officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore
       et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
       commodo consequat.</p>
     </div>
    </div>
    <p className='mt-3'>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food
     to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
   </div>
   <ContactForm />
  </Wrapper>
 )
}

export default About


const Wrapper = styled.section`
 margin-top: -1rem;
  min-height: 100vh;
  padding-top: 5rem;
`
