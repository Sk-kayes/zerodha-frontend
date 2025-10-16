const Pricing = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:justify-between p-5 md:p-10 gap-8 lg:gap-0'>
            <div className='w-full lg:w-[40%]'>
                <h2 className='text-[20px] md:text-[24px] mb-4 md:mb-6 text-[#424242] font-[500]'>Unbeatable pricing</h2>
                <p className='text-[#424242] text-[14px] md:text-[16px]'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href="#" className='mt-6 text-[#387ed1] font-[500] hover:text-[#222] flex items-center gap-2 text-sm md:text-base w-fit'>
                    Try Kite demo
                    <i className="ri-arrow-right-long-line"></i>
                </a>
            </div>
            <div className='flex flex-col sm:flex-row justify-center sm:justify-between w-full lg:w-[50%] gap-6 sm:gap-4'>
                <div className='flex items-center justify-start pl-5 sm:justify-center'>
                    <img src="svg/pricing-eq.svg" alt="" className='w-[60px] md:w-[85px]' />
                    <p className='text-[#666] text-[10px] md:text-[12px] ml-2'>
                        Free account<br />opening
                    </p>
                </div>

                <div className='flex items-center justify-start pl-5 sm:justify-center'>
                    <img src="svg/pricing-eq.svg" alt="" className='w-[60px] md:w-[85px]' />
                    <p className='text-[#666] text-[10px] md:text-[12px] ml-2'>
                        Free equity delivery<br />and direct mutual funds
                    </p>
                </div>

                <div className='flex items-center justify-start pl-5 sm:justify-center gap-2'>
                    <img src="svg/other-trades.svg" alt="" className='w-[60px] md:w-[85px]' />
                    <p className='text-[#666] text-[10px] md:text-[12px]'>
                        Intraday and<br />F&O
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Pricing