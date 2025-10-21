import React from 'react'

const Links = () => {
    return (
        <div className="max-w-md w-full border border-gray-200 rounded-sm bg-white">
    <div className="bg-[#f8f8f8] px-3 md:px-4 py-2 border-b border-gray-200">
        <h3 className="text-[14px] md:text-[15px] font-[500] text-[#424242]">Quick links</h3>
    </div>

    <ul className="divide-y divide-gray-200">
        <li className="px-3 md:px-4 py-2 md:py-3">
            <a href="#" className="text-[#1a73e8] hover:text-[#424242] hover:font-[400] text-[14px] md:text-[15px] transition-colors">1. Track account opening</a>
        </li>
        <li className="px-3 md:px-4 py-2 md:py-3">
            <a href="#" className="text-[#1a73e8] hover:text-[#424242] hover:font-[400] text-[14px] md:text-[15px] transition-colors">2. Track segment activation</a>
        </li>
        <li className="px-3 md:px-4 py-2 md:py-3">
            <a href="#" className="text-[#1a73e8] hover:text-[#424242] hover:font-[400] text-[14px] md:text-[15px] transition-colors">3. Intraday margins</a>
        </li>
        <li className="px-3 md:px-4 py-2 md:py-3">
            <a href="#" className="text-[#1a73e8] hover:text-[#424242] hover:font-[400] text-[14px] md:text-[15px] transition-colors">4. Kite user manual</a>
        </li>
        <li className="px-3 md:px-4 py-2 md:py-3">
            <a href="#" className="text-[#1a73e8] hover:text-[#424242] hover:font-[400] text-[14px] md:text-[15px] transition-colors">5. Learn how to create a ticket</a>
        </li>
    </ul>
</div>
    )
}

export default Links