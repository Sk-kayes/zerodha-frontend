const Hero = () => {
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <div className='text-center'>
                <img src='images/homeHero.png' alt='Hero Image' className='w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto' />
                <h1 className='mt-6 md:mt-8 text-[24px] md:text-[28px] lg:text-[32px] text-[#424242] font-[500] px-4'>Invest in everything</h1>
                <p className='text-[16px] md:text-[18px] lg:text-[20px] text-[#424242] mt-3 md:mt-4 font-[400] px-4 max-w-2xl mx-auto'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='py-2 md:py-3 px-6 md:px-8 bg-[#387ed1] text-white text-[16px] md:text-[18px] lg:text-[20px] font-[500] mx-auto block rounded mt-8 md:mt-12 hover:cursor-pointer hover:bg-[#222] transition-colors'>Sign up for free</button>
            </div>
        </div>
    )
}

export default Hero