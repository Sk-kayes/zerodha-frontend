import Card from "./Card"

const Hero = () => {
    return (
        <div>
            <div className="text-center py-8 md:py-14 px-4">
                <div className="mb-8 md:mb-16">
                    <h1 className="text-[24px] md:text-[28px] text-[#424242] font-[500]">Charges</h1>
                    <p className="text-[16px] md:text-[20px] text-[#9b9b9b] font-[400]">List of all charges and taxes</p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-10 lg:gap-20 px-2 md:px-6">
                    <Card
                        title="Free equity delivery"
                        description="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
                        imgSrc="svg/pricing-eq.svg"
                    />

                    <Card
                        title="Intraday and F&O trades"
                        description="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
                        imgSrc="svg/other-trades.svg"
                    />

                    <Card
                        title="Free direct MF"
                        description="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
                        imgSrc="svg/pricing-eq.svg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero