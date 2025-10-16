const Stats = () => {
    return (
        <div className='max-w-7xl mx-auto mt-2 md:mt-10 p-5 md:p-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>
                <div className='order-1 lg:order-1'>
                    <h2 className='text-[20px] md:text-[24px] mb-4 md:mb-6 text-[#424242] font-[500]'>Trust with confidence</h2>
                    <h3 className='text-[18px] md:text-[20px] mb-2 text-[#424242] font-[500]'>Customer-first always</h3>
                    <p className='mb-4 md:mb-6 text-[#666] text-sm md:text-base'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h3 className='text-[18px] md:text-[20px] mb-2 text-[#424242] font-[500]'>No spam or gimmicks</h3>
                    <p className='mb-4 md:mb-6 text-[#666] text-sm md:text-base'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h3 className='text-[18px] md:text-[20px] mb-2 text-[#424242] font-[500]'>The Zerodha universe</h3>
                    <p className='mb-4 md:mb-6 text-[#666] text-sm md:text-base'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className='text-[18px] md:text-[20px] mb-2 text-[#424242] font-[500]'>Do better with money</h3>
                    <p className='mb-4 md:mb-6 text-[#666] text-sm md:text-base'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='flex flex-col items-center lg:items-center order-1 lg:order-2'>
                    <img src="images/ecosystem.png" alt="" className='w-full max-w-lg lg:w-[90%]' />
                    <div className='flex flex-row justify-center gap-8 mt-6'>
                        <a href="#" className='text-[#387ed1] font-[500] hover:text-[#222] flex items-center gap-2 text-sm md:text-base'>
                            Explore our products
                            <i className="ri-arrow-right-long-line"></i>
                        </a>
                        <a href="#" className='text-[#387ed1] font-[500] hover:text-[#222] flex items-center gap-2 text-sm md:text-base'>
                            Try Kite demo
                            <i className="ri-arrow-right-long-line"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats