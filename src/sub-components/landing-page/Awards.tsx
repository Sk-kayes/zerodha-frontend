const Awards = () => {
    return (
         <div className='max-w-7xl mx-auto p-5 mt-10 md:mt-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-2'>
                <div className='order-1 lg:order-1'>
                    <img src="svg/largestBroker.svg" alt="" className='w-full' />
                </div>
                <div className='mt-0 lg:mt-30 order-1 lg:order-2'>
                    <h2 className='text-[24px] md:text-[28px] text-[#424242] font-[500]'>Largest stock broker in India</h2>
                    <p className='mt-4 text-[#424242] text-sm md:text-base'>2+ million Zerodha clients contribute to over 15% of all retauk order volumes in india daily by trading and inversting in:</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-4 mb-2 text-[#666] gap-4'>
                        <div>
                            <ul className='space-y-2 list-disc ml-6'>
                                <li>
                                    <p className='text-sm md:text-base'>Fetures and Options</p>
                                </li>
                                <li>
                                    <p className='text-sm md:text-base'>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p className='text-sm md:text-base'>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className='space-y-2 list-disc ml-6'>
                                <li>
                                    <p className='text-sm md:text-base'>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p className='text-sm md:text-base'>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p className='text-sm md:text-base'>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='images/pressLogos.png' className='w-full md:w-[70%] mt-12 ml-2' />
                </div>
            </div>
        </div>
    )
}

export default Awards