import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/logo.jpg'
import { useUtilsContext } from '../../context/utils_context'
import { links } from '../../utils/constants'


const Sidebar = () => {
 const { isSidebarOpen, closeSidebar } = useUtilsContext()

 return (
  <Wrapper>
   <div className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'} `}>
    <div className='sidebar-header'>
     <div className='logo'>
      <button className='close-sidebar' onClick={closeSidebar}>
       <FaTimes />
      </button>
     </div>
     <Link to='/'>
      <img src={logo} alt='logo' />
      <span className='brand-name'>Lorine</span>
     </Link>
     <p>Login</p>
    </div>
    <ul className='sidebar-link'>
     {links.map((link) => {
      const { id, url, pathName } = link

      return (
       <li key={id}>
        <Link to={url} className='nav-link' onClick={closeSidebar}>
         {pathName}
        </Link>
       </li>
      )
     })}
     <li>
      <Link to='/checkout' className='nav-link' onClick={closeSidebar}>
       Checkout
      </Link>
     </li>
    </ul>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.aside`
  background-color: var(--gray-light);
  color: var(--dark);

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--light);
    transform: translate(-100%);
    transition: var(--transition);
    z-index: -1;
  }

  img {
    height: 2.3rem;
  }

  .brand-name {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .close-sidebar {
    height: 40px;
    width: 40px;
    font-size: 1.3rem;
    background: transparent;
    border: none;
    color: inherit;
    transition: var(--transition);
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: var(--gray-light);
  }
  li {
    padding: 0.7rem 0;
    /* font-weight: 400; */
    text-transform: capitalize;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
    transition: var(--transition);
  }

  .nav-link {
    background-color: var(--gray-light);
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
