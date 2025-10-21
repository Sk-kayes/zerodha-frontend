import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="py-16 px-6 text-[#424242]">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-[28px] md:text-[28px] font-medium mb-2">
                    Zerodha Products
                </h1>

                <p className="text-[20px] mb-4 font-[400]">
                    Sleek, modern, and intuitive trading platforms
                </p>

                <p className="text-[16px]">
                    Check out our{" "}
                    <Link
                        to=""
                        className="text-[#1a73e8] font-[400] hover:text-black inline-flex items-center gap-1"
                    >
                        investment offerings
                        <i className="ri-arrow-right-line text-[16px]"></i>
                    </Link>
                </p>
            </div>

            <div className="border-t border-[#e5e5e5] my-10 md:my-16 max-w-5xl mx-auto"></div>
        </div>
  )
}

export default Hero