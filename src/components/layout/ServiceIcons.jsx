import React from 'react'
import styled from 'styled-components'
import { deliverySteps } from '../../utils/constants'

const ServiceIcons = () => {
 return (
  <Wrapper>
   <div className='container delivery-steps px-3'>
    <h3 className="top-title">We Offer Quality</h3>
    <div className='row'>
     {deliverySteps.map((item) => {
      const { id, title, desc, icon } = item
      return (
       <div className='col-sm-4' key={id}>
        <p className='icon'>{icon} </p>
        <p className='title'>{title} </p>
        <p className='desc'>{desc} </p>
       </div>
      )
     })}
    </div>
   </div>
  </Wrapper>
 )
}
const Wrapper = styled.div`
  .delivery-steps {
    color: var(--dark);
    text-align: center;
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
`

export default ServiceIcons
