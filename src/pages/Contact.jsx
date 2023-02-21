import React from 'react'
import styled from 'styled-components'
import { SocialIcons } from '../components'
import delivery from '../assets/images/delivery.svg'
import celebration from '../assets/images/Happy-Birthday.svg'
import chef from '../assets/images/chef.svg'

const Contact = () => {
  return (
    <Wrapper>
      <h1>home/contact</h1>
      <div className='container contact'>
        <div className='row'>
          <div className=''>
            <div className='about-images '>
              <img src={chef} alt='chef' />
              <img src={delivery} alt='package delivery' />
              <img src={celebration} alt='happy' />
            </div>
            <div className='map'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.488636125813!2d3.181883814178346!3d6.459605395326834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b86c999c99535%3A0x29eae1a660ff6a7d!2s2%20Osunmakinde%20St%2C%20Ojo%20102111%2C%20Lagos!5e0!3m2!1sen!2sng!4v1676286120652!5m2!1sen!2sng'
                width='100%'
                height='400px'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
              ></iframe>
            </div>
          </div>
          <div className=' details '>
            <div className='address container text-center mb-3 mt-5'>
              <div className='row'>
                <div className='col-sm-3'>
                  <h5>Address</h5>
                  <p>
                    2, Osunmankinde Street, ojo-Alaba, <br />
                    <span>Lagos State</span>
                  </p>
                </div>
                <div className='col-sm-3'>
                  <h5>Telephone</h5>
                  <p>
                    +234 818 8534 279 <br /> <span> +234 903 8434 979</span>
                  </p>
                </div>
                <div className='col-sm-3'>
                  <h5>E-mail</h5>
                  <p>lorinetreats@gmail.com</p>
                </div>
                <div className='col-sm-3'>
                  <h5>Socials</h5>
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .about-images {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -3rem;
  }

  .about-images img {
    height: 200px;
    width: 100px;
  }

  @media screen and (max-width: 992px) {
    iframe {
      height: 63vh;
    }
  }
`

export default Contact
