import { Link } from "react-router-dom"

const Universe = () => {
    return (
        <div className="bg-white py-8 sm:py-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-14">
                <p className="text-xs sm:text-sm text-[#6b7280] px-4">
                    Want to know more about our technology stack? Check out the{' '}
                    <a href="#" className="text-[#1a73e8] hover:underline">Zerodha.tech</a> blog.
                </p>
            </div>

            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 px-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#222] mb-2">The Zerodha Universe</h2>
                <p className="text-xs sm:text-sm text-[#6b7280]">Extend your trading and investment experience even further with our partner platforms</p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-y-10 gap-x-6 sm:gap-x-8 md:gap-x-12 items-start text-center px-4">
                <Link to="#" className="flex flex-col items-center gap-3 sm:gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <img src="images/zerodhafundhouse.png" alt="Zerodha Fund House" className="w-20 sm:w-24 md:w-28 h-auto object-contain hover:opacity-[0.8] transition-opacity" />
                    <p className="text-[11px] sm:text-[12px] text-[#6b7280] max-w-[200px] sm:max-w-[220px] leading-relaxed">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </Link>

                <Link to="#" className="flex flex-col items-center gap-3 sm:gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <img src="svg/sensibull-logo.svg" alt="Sensibull" className="w-20 sm:w-24 md:w-28 h-auto object-contain hover:opacity-[0.8] transition-opacity" />
                    <p className="text-[11px] sm:text-[12px] text-[#6b7280] max-w-[200px] sm:max-w-[220px] leading-relaxed">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </Link>

                <Link to="#" className="flex flex-col items-center gap-3 sm:gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <img src="svg/tijori.svg" alt="Tijori" className="w-20 sm:w-24 md:w-28 h-auto object-contain hover:opacity-[0.8] transition-opacity" />
                    <p className="text-[11px] sm:text-[12px] text-[#6b7280] max-w-[200px] sm:max-w-[220px] leading-relaxed">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </Link>

                <Link to="#" className="flex flex-col items-center gap-3 sm:gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <img src="images/streak-logo.png" alt="Streak" className="w-20 sm:w-24 md:w-28 h-auto object-contain hover:opacity-[0.8] transition-opacity" />
                    <p className="text-[11px] sm:text-[12px] text-[#6b7280] max-w-[200px] sm:max-w-[220px] leading-relaxed">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </Link>

                <Link to="#" className="flex flex-col items-center gap-3 sm:gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <img src="images/smallcase-logo.png" alt="smallcase" className="w-20 sm:w-24 md:w-28 h-auto object-contain hover:opacity-[0.8] transition-opacity" />
                    <p className="text-[11px] sm:text-[12px] text-[#6b7280] max-w-[200px] sm:max-w-[220px] leading-relaxed">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </Link>

                <Link to="#" className="flex flex-col items-center gap-3 sm:gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <img src="images/ditto-logo.png" alt="ditto" className="w-20 sm:w-24 md:w-28 h-auto object-contain hover:opacity-[0.8] transition-opacity" />
                    <p className="text-[11px] sm:text-[12px] text-[#6b7280] max-w-[200px] sm:max-w-[220px] leading-relaxed">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </Link>
            </div>

            <div className="max-w-6xl mx-auto text-center mt-8 sm:mt-12 px-4">
                <button className="py-3 sm:py-2 md:py-3 px-8 sm:px-6 md:px-8 bg-[#387ed1] text-white text-sm sm:text-[15px] md:text-[16px] font-medium rounded hover:bg-black transition-colors cursor-pointer w-full sm:w-auto">
                    Sign up for free
                </button>
            </div>
        </div>
    )
}

export default Universe