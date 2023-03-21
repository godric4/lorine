import React from 'react'
import styled from 'styled-components'
import { ServiceIcons, Showcase, SocialIcons, Contact, Reviews, Header } from '../components'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import shirt from '../assets/images/shirt.jpg'

const Home = () => {
 return (
  <Wrapper>
   <Header />
   <div className="social">
    <SocialIcons />
   </div>
   <ServiceIcons />
   <Showcase />

   <div className='contact container'>
    <h2 className='top-title text-center pt-3 mt-3'>
     Want a Custom Cake???
    </h2>
    <div className='container custom '>
     <img src={shirt} alt='Custom made shirt cake' width={'225px'} className='mx-1 mt-2' />

     <div className='mx-1 mt-2'>
      <p>
       If you want to create a cake that is not on our catalogue or you
       wish to make specific designs to suit your needs and occasion.
      </p>
      <p>
       Kindly give us a buzz on whatsapp by clicking the Whatsapp icon <span><Link to="/" className='whatsapp'><FaWhatsapp /></Link></span> or send us your needs via email.
       Our manager will contact you to clarify the details.
      </p>
      <p>
       Your best interest is our primary concern.
      </p>
     </div>

    </div>
   </div>
   <Contact />
   <Reviews />
  </Wrapper>
 )
}

const Wrapper = styled.section`
.social {
 text-align: center;
 color: var(--dark);
 margin-top: -3rem;
}

  .custom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35rem;
    text-align: justify;
  }

  .custom p {
    font-size: 0.9rem;
  }

  .whatsapp svg {
    color: green;
    font-weight: bolder;
    font-size:1rem;
  }

  .whatsapp :hover {
    color: var(--dark);
  }

  @media screen and (max-width: 576px) {
    .custom {
      flex-direction: column;
      width: 90vw;
    }

    .custom img {
      width: 100%;
      height: 300px;
    }
  }

  /* @media screen and (min-width: 768px){
   .social {
    display: none;
   }
  }
  */
 svg {
  font-size: 2.8rem;
 }

`

export default Home
