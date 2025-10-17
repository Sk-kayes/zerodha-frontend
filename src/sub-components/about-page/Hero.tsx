const Hero = () => {
    return (
        <div className="bg-white py-8 md:py-16 px-5 md:px-10 lg:px-20 text-[#424242]">
            <div className="max-w-2xl mx-auto text-center">
                <p className="text-[18px] md:text-[22px] lg:text-[26px] font-medium leading-snug">
                    We pioneered the discount broking model in India.<br />
                    Now, we are breaking ground with our technology.
                </p>
            </div>

            <div className="border-t border-[#e5e5e5] my-10 md:my-20 max-w-5xl mx-auto"></div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-[14px] md:text-[15px] leading-6 md:leading-7">
                <div className="space-y-4 md:space-y-5 px-4 md:px-8 lg:px-12 text-[14px] md:text-[16px]">
                    <p>
                        We kick-started operations on the 15th of August, 2010 with the goal of
                        breaking all barriers that traders and investors face in India in terms of
                        cost, support, and technology. We named the company Zerodha, a combination
                        of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>
                    <p>
                        Today, our disruptive pricing models and in-house technology have made us
                        the biggest stock broker in India.
                    </p>
                    <p>
                        Over 1.6+ crore clients place billions of orders every year through our
                        powerful ecosystem of investment platforms, contributing over 15% of all
                        Indian retail trading volumes.
                    </p>
                </div>

                <div className="space-y-4 md:space-y-5 px-4 md:px-8 lg:px-12 text-[14px] md:text-[16px]">
                    <p>
                        In addition, we run a number of popular open online educational and
                        community initiatives to empower retail traders and investors.
                    </p>
                    <p>
                        <span className="text-[#1a73e8] font-medium hover:underline cursor-pointer">
                            Rainmatter
                        </span>
                        , our fintech fund and incubator, has invested in several fintech startups
                        with the goal of growing the Indian capital markets.
                    </p>
                    <p>
                        And yet, we are always up to something new every day. Catch up on the latest
                        updates on our{' '}
                        <span className="text-[#1a73e8] font-medium hover:underline cursor-pointer">
                            blog
                        </span>{' '}
                        or see what the media is{' '}
                        <span className="text-[#1a73e8] font-medium hover:underline cursor-pointer">
                            saying about us
                        </span>{' '}
                        or learn more about our business and product{' '}
                        <span className="text-[#1a73e8] font-medium hover:underline cursor-pointer">
                            philosophies
                        </span>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero