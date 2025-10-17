const Me = () => {
    return (
        <div className="py-8 md:py-16 px-5 md:px-10 lg:px-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
        <div className="flex flex-col items-center text-center md:text-left order-1 md:order-1">
            <img
                src="#"
                alt="Nithin Kamath"
                className="w-40 h-40 md:w-52 md:h-52 lg:w-58 lg:h-55 rounded-full object-cover mb-4 md:mb-6 bg-lime-100"
            />
            <h5 className="text-[#222] font-medium text-[16px] md:text-[17px]">Nithin Kamath</h5>
            <p className="text-[#777] text-[13px] md:text-[14px]">Founder, CEO</p>
        </div>
        <div className="text-[#555] text-[14px] md:text-[15px] leading-6 md:leading-7 space-y-4 md:space-y-5 order-2 md:order-2 px-4 md:px-0">
            <p>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his
                decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking
                industry.
            </p>
            <p>
                He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data
                Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
                Connect on{' '}
                <a href="#" className="text-[#1a73e8] hover:underline">
                    Homepage
                </a>{' '}
                /{' '}
                <a href="#" className="text-[#1a73e8] hover:underline">
                    TradingQnA
                </a>{' '}
                /{' '}
                <a href="#" className="text-[#1a73e8] hover:underline">
                    Twitter
                </a>
            </p>
        </div>
    </div>
</div>

    )
}

export default Me