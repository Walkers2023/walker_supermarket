import React from 'react'
import { Logo, Pl1 } from '../../Assets/Assets'

// const Navbar = () => {
//   return (
//     <header className=' box-border h-24 w-full'>
//       <section className=' bg-primary w-full h-10'></section>
//       <section className=' bg-white w-full h-14 flex flex-row items-center justify-between px-10 gap-10 '>
//       {/* Brand Logo */}
//         <a href='https://walkerssupermarket.co.uk/' className=' w-120 h-46'>
//           <img src={Logo} alt='Walker Supermarket' className=' object-contain w-full h-full'/>
//         </a>
//         {/* Placeholder Navigation Bar */}
//         <div className=' w-full  h-max flex items-center justify-end '>
//           <img src= {Pl1} alt='Just a Placeholder' className=' object-contain w-full h-full' />
//         </div>
//       </section>
//     </header>
//   )
// }

// export default Navbar

const Navbar = () => {
  return (
    <header className=' box-border h-24 w-full'>
      <section className=' bg-primary w-full h-10'></section>
      <section className=' bg-white w-full h-14 flex flex-row items-center justify-between px-10 gap-10 '>
      {/* Brand Logo */}
        <a href='https://walkerssupermarket.co.uk/' className='h-16'>
          <img src={Logo} alt='Walker Supermarket' className=' object-contain w-full h-full'/>
        </a>
        {/* Placeholder Navigation Bar */}
        {/* <div className=' w-full  h-max flex items-center justify-end '>
          <img src= {Pl1} alt='Just a Placeholder' className=' object-contain w-full h-full' />
        </div> */}
        <nav className='flex gap-80 font-poppins'>
          <div className='flex'>
            <ul className='flex gap-6 font-semibold'>
              <li><button>Home</button></li>
              <li><button>Shop</button></li>
              <li><button>British Brands</button></li>
              <li><button>Subscription and Rewards</button></li>
              <li><button>Contact Us</button></li>
            </ul>
          </div>
          <div>
            <ul className='flex gap-6 font-semibold'>
              <li>icon</li>
              <li>icon</li>
              <li>icon</li>
              <li>icon</li>
            </ul>
          </div>
        </nav>
      </section>
    </header>
  )
}

export default Navbar