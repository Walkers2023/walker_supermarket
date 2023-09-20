import React from 'react'
import { Logo } from '../../Assets/Assets'
import {  HiOutlineUser, HiOutlineShoppingCart } from "react-icons/hi"
import { NavLink } from 'react-router-dom'

//this component is not responsive for mobile

const Navbar = () => {
  return (
    <header className=' box-border h-24 w-full'>
      <section className=' bg-primary w-full h-10'></section>
      <section className=' bg-white w-full h-14 flex flex-row items-center justify-between px-10 gap-10 '>
      {/* Brand Logo */}
        <a href='https://walkerssupermarket.co.uk/' className='h-16'>
          <img src={Logo} alt='Walker Supermarket' className='object-contain w-full h-full'/>
        </a>
        <nav className='flex gap-80 font-poppins'>
          <div className='flex'>
            <section className='flex gap-6 font-semibold'>

              <NavLink
                  to='/home'                  
              >
                <div className='hover:bg-slate-400 p-4'>Home</div>
              </NavLink>

              <NavLink
                  to='/Shop'                  
              >
                <div className='hover:bg-slate-400 p-4'>Shop</div>
              </NavLink>

              <NavLink
                  to='/BritishBrands'                  
              >
                <div className='hover:bg-slate-400 p-4'>British Brands</div>
              </NavLink>

              <NavLink
                  to='/SubscriptionAndRewards'                  
              >
                <div className='hover:bg-slate-400 p-4'>Subscription and Rewards</div>
              </NavLink>

              <NavLink
                  to='/ContactUs'                  
              >
                <div className='hover:bg-slate-400 p-4'>Contact Us</div>
              </NavLink>
            </section>
          </div>
          <div>
            <section className='flex gap-6 font-semibold'>
              
              <NavLink
                  to='/'                  
              >
                <div className='text-lg font-medium p-4 hover:bg-slate-400'>< HiOutlineUser/></div>
              </NavLink>

              {/* <li className='hover:bg-slate-400 p-4'><button>icon</button></li>
              <li className='hover:bg-slate-400 p-4'><button>icon</button></li>
              <li className='hover:bg-slate-400 p-4'><button>icon</button></li>
              <li className='hover:bg-slate-400 p-4'><button>icon</button></li> */}
            </section>
          </div>
        </nav>
      </section>
    </header>
  )
}

export default Navbar