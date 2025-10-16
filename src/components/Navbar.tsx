import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 py-6 max-w-7xl mx-auto border-b border-1 border-black'>
      <div>
        <img src='svg/logo.svg' alt='Logo' className='w-[130px]' />
      </div>
      <div className='hidden md:flex items-center space-x-6'>
        <a href="#" className='text-[#666] hover:text-[#387ed1] transition-colors'>Signup</a>
        <a href="#" className='text-[#666] hover:text-[#387ed1] transition-colors'>About</a>
        <a href="#" className='text-[#666] hover:text-[#387ed1] transition-colors'>Products</a>
        <a href="#" className='text-[#666] hover:text-[#387ed1] transition-colors'>Pricing</a>
        <a href="#" className='text-[#666] hover:text-[#387ed1] transition-colors'>Support</a>
      </div>
      <div className='md:hidden'>
        <i className="ri-menu-line text-2xl text-[#424242]"></i>
      </div>
    </div>
  )
}

export default Navbar
