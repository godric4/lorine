import React from 'react'
import styled from 'styled-components'
import { deliverySteps } from '../../utils/constants'
const Featured = () => {
  return (
    <Wrapper>
      <div className='container featured'>
        <h2 className='top-title'>Our Featured Bites</h2>

        <div className='container products'></div>

        <div className='container delivery-steps'>
          <div className='row'>
            <h2 className='top-title'>How we Work</h2>
            {deliverySteps.map((item) => {
              const { id, title, desc, icon } = item

              return (
                <div className='col-sm-3' key={id}>
                  <p className='icon'>{icon} </p>
                  <p className='title'>{title} </p>
                  <p className='desc'>{desc} </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* padding: 0.5rem 0; */
  /* background-color: var(--gray-light); */
  .featured {
    text-align: center;
  }

  .delivery-steps {
    color: var(--dark);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: -0.5rem;
  }

  .title {
    font-weight: bold;
  }

  .desc {
    margin-top: -1rem;
    font-size: 0.9rem;
  }

  /* @media screen and (min-width: 992px) {
    hr {
      font-size: 2rem;
      font-weight: bold;
    }
  } */
`

export default Featured
