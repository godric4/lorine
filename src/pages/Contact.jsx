import React from 'react'
import styled from 'styled-components'
import { ContactForm, MiniHero, SocialIcons } from '../components'
import laura from '../assets/images/laura.jpg'
import kapoor from '../assets/images/kapoor.jpg'
import shop from '../assets/images/shop.jpg'

const Contact = () => {
 return (
  <Wrapper>
   <MiniHero title='contact' />
   <h3 className='text-center top-title mb-3'>Find Us</h3>
   <div className='container'>
    <div className='row'>
     <div className='col-lg-8'>
      <div className='map'>
       <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.488636125813!2d3.181883814178346!3d6.459605395326834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b86c999c99535%3A0x29eae1a660ff6a7d!2s2%20Osunmakinde%20St%2C%20Ojo%20102111%2C%20Lagos!5e0!3m2!1sen!2sng!4v1676286120652!5m2!1sen!2sng'
        width='100%'
        height='350px'
        style={{ border: 0 }}
        allowFullScreen=''
        loading='lazy'
       ></iframe>
      </div>

      <div className='about-images '>
       <img src={kapoor} alt='love message' />
       <img src={laura} alt='love message' />
       <img src={shop} alt='love message' />
      </div>
     </div>

     <div className='col-lg-4 details pt-4'>
      <div className='row'>
       <div className=''>
        <h5>Address</h5>
        <p>
         2, Osunmankinde Street, ojo-Alaba, <br />
         <span>Lagos State</span>
        </p>
       </div>
       <div className=''>
        <h5>Telephone</h5>
        <p>
         +234 818 8534 279 <br /> <span> +234 903 8434 979</span>
        </p>
       </div>
       <div className=''>
        <h5>E-mail</h5>
        <p>lorinetreats@gmail.com</p>
       </div>
       <div className=''>
        <h5>Hours</h5>
        <p>Monday - Saturday <br /> <span>8:00am - 7:00pm</span></p>
        <p>Sunday <br /> <span>10:00am - 6:00pm</span></p>
       </div>
       <div className='mb-3'>
        <h5>Socials</h5>
        <SocialIcons />
       </div>
      </div>
     </div>
    </div>
   </div>
   <ContactForm />
  </Wrapper>
 )
}

const Wrapper = styled.section`
margin-top: -1rem;
  min-height: 100vh;
  padding-top: 5rem;

  .details {
    background-color: var(--gray-light);
  }

  .about-images {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .about-images img {
    height: 155px;
    width: 100%;
    margin: 0 0.1rem;
  }

  @media screen and (max-width: 900px) {
    .details {
      text-align: center;
    }
  }

  @media only screen and (max-width: 448px) {
    .about-images img {
      height: 100px;
      width: 110px;
      margin: 0;
    }
  }
`

export default Contact
