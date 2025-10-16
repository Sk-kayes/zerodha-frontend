import React from 'react'

const Education = () => {
  return (
    <div className='max-w-7xl mx-auto p-5 md:p-10'>
  <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start'>
    <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
      <img src="/svg/education.svg" alt="" className='w-full max-w-md lg:max-w-md' />
    </div>
    <div className='w-full lg:w-1/2 space-y-6'>
      <h2 className='text-[20px] md:text-[24px] mb-4 md:mb-6 text-[#424242] font-[500] text-center lg:text-left'>Free and open market education</h2>
      <div className='space-y-4'>
        <p className='text-[#424242] text-[14px] md:text-[16px] text-center lg:text-left'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
        <a href="" className='text-[#387ed1] font-[500] hover:text-[#222] flex items-center justify-center lg:justify-start gap-2 text-sm md:text-base w-fit mx-auto lg:mx-0'>
          Varsity
          <i className="ri-arrow-right-long-line"></i>
        </a>
      </div>
      <div className='space-y-4'>
        <p className='text-[#424242] text-[14px] md:text-[16px] text-center lg:text-left'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
        <a href="" className='text-[#387ed1] font-[500] hover:text-[#222] flex items-center justify-center lg:justify-start gap-2 text-sm md:text-base w-fit mx-auto lg:mx-0'>
          TradingQ&A
          <i className="ri-arrow-right-long-line"></i>
        </a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Education
