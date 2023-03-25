import React, { useState, useEffect } from 'react'
import { FaBars, FaSlidersH } from 'react-icons/fa'
import styled from 'styled-components'
import CartButtons from '../cart/CartButtons'
import logo from '../../assets/images/logo.jpg'
import { Link } from 'react-router-dom'
import { links } from '../../utils/constants'
import { useUtilsContext } from '../../context/utils_context'

const Navbar = () => {

 const { openSidebar } = useUtilsContext()
 const [scrolled, setScrolled] = useState("")
 const isScrolled = window.scrollY;

 useEffect(() => {
  const handleScroll = () => {


   if (isScrolled !== scrolled) {
    setScrolled(isScrolled)
   }
  }

  window.addEventListener("scroll", handleScroll)

  return () => {
   window.removeEventListener("scroll", handleScroll)
  }

 }, []);


 return (
  <Wrapper>
   <div className={isScrolled ? 'scrolled' : ''}>
    <div className='nav-container'>
     <div className='nav-header'>
      <button className="nav-switch mx-1">
       <FaBars onClick={openSidebar} />
      </button>
      <div className="brand d-flex">

       <h3 className="name">
        <Link to="/">
         <img src={logo} alt="Logo" />
         <span>Lorine</span>
        </Link>

       </h3>
      </div>
     </div>
     <ul className="nav-links">
      {
       links.map((link) => {
        const { id, url, pathName } = link
        return <li key={id} className="nav-link">
         <Link to={url}>{pathName}</Link>
        </li>
       })
      }
     </ul>
     <div className="cart-buttons">
      <CartButtons />
     </div>
    </div>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.nav`

 color: var(--light);
 position:fixed;
 z-index: 10;
 width: 100vw;
    background-color: var(--dark);
 

 .nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem  2.5rem .5rem 0 ;

 }

 .scrolled {
    background-color: var(--dark);
 }

 .brand {
  margin-top: -1rem;
 }

 ul, .nav-header{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
  }

  img {
    height: 1.8rem;
  }

  .name {
   font-family: lobster;
   font-weight: bold;
  }

   .nav-switch {
    height: 50px;
    width: 50px;
    font-size: 1.7rem;
    background: transparent;
    border: none;
    color: inherit;
    margin-top: -1.5rem;
  }

  .nav-link {
    margin: 0 0.5rem;
    font-size: 1.2rem;
    text-transform: capitalize;
    font-weight: bold;
  }

   @media screen and (max-width: 992px) {
    .nav-header {
     margin-top: 2rem
    }
    ul {
      display: none;
    }

    .cart-buttons {
     margin-right: -1rem;
    }

   
  }

  @media screen and (min-width: 992px) {
    .nav-switch {
      display: none;
    }
     .brand {
     margin-left: 1.5rem;
    }

    
  }

`

export default Navbar
