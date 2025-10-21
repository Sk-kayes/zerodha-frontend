const Hero = () => {
    return (
        <div className="bg-[#f6f6f6] w-full h-auto md:h-[220px] py-6 md:py-10 px-4 md:px-[24px]">
            <div className="max-w-full mx-auto px-2 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6 gap-4 md:gap-0">
                    <h2 className="text-[24px] md:text-[36px] font-[600] text-[#424242]">Support Portal</h2>
                    <button className="bg-[#1976d2] text-white font-medium px-4 md:px-5 py-2 rounded-md hover:bg-[#424242] transition cursor-pointer text-sm md:text-base">
                        My tickets
                    </button>
                </div>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Eg: How do I open my account, How do I activate F&O..."
                        className="w-full border border-gray-300 rounded-md py-3 pl-10 pr-4 text-gray-700 focus:outline-none focus:shadow-md transition-all duration-200 text-sm md:text-base" />
                    <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-[18px] md:text-[20px]">
                        <i className="ri-search-line"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Hero