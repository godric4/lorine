import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/images/logo.jpg'
import { links } from '../utils/constants'
import { UtilsContext } from '../context/utils_context'
import CartButtons from './CartButtons'
const Navbar = () => {
  const { openSidebar } = useContext(UtilsContext)
  return (
    <Wrapper>
      <div className='nav-mid'>
        <div className='nav-header'>
          <button className='nav-switch'>
            <FaBars onClick={openSidebar} />
          </button>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt='logo' />
              <span className='brand-name'>Lorine</span>
            </Link>
          </div>
        </div>
        <ul className='links-wrapper'>
          {links.map((link) => {
            const { id, url, pathName } = link

            return (
              <Link to={url} key={id}>
                <li className='nav-link'>{pathName}</li>
              </Link>
            )
          })}
        </ul>
        <CartButtons />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: 4rem;
  width: 100vw;
  background-color: var(--gray-light);
  color: var(--dark);
  position: fixed;
  z-index: 1;

  padding: 1rem;

  img {
    height: 2.3rem;
  }

  .brand-name {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .nav-mid {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-switch {
    height: 40px;
    width: 40px;
    font-size: 1.3rem;
    background: transparent;
    border: none;
    color: inherit;
  }

  ul,
  .nav-header {
    display: flex;
    place-items: center;
  }

  .nav-link {
    margin: 0 0.5rem;
    font-size: 1.2rem;
    text-transform: capitalize;
  }

  @media screen and (max-width: 992px) {
    .links-wrapper {
      display: none;
    }
  }

  @media screen and (min-width: 992px) {
    .nav-switch {
      display: none;
    }
  }
`

export default Navbar
