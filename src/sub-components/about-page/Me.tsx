const Me = () => {
    return (
        <div className="py-16 px-20">
            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="flex flex-col items-center text-center md:text-left">
                    <img
                        src="#"
                        alt="Nithin Kamath"
                        className="w-58 h-55 rounded-full object-cover mb-6 bg-lime-100"
                    />
                    <h5 className="text-[#222] font-medium text-[17px]">Nithin Kamath</h5>
                    <p className="text-[#777] text-[14px]">Founder, CEO</p>
                </div>
                <div className="text-[#555] text-[15px] leading-7 space-y-5">
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