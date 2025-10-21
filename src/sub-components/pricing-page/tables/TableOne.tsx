import React from 'react'

const TableOne = () => {
    return (
        <div className="max-w-6xl mx-auto my-6 md:my-10 px-4">
            <h2 className="text-[18px] md:text-[22px] font-[500] text-[#424242] mb-4">
                Charges for account opening
            </h2>

            <div className="border border-gray-300 rounded-md overflow-hidden">
                <div className="flex justify-between bg-gray-50 border-b border-gray-300 px-2 md:px-4 py-3 font-medium text-gray-700 text-sm md:text-base">
                    <span>Type of account</span>
                    <span>Charges</span>
                </div>

                <div className="flex justify-between items-center px-2 md:px-4 py-3 border-b border-gray-200 bg-white text-sm md:text-base">
                    <span>Online account</span>
                    <span className="bg-green-600 text-white text-xs font-semibold px-2 md:px-3 py-1 rounded">FREE</span>
                </div>

                <div className="flex justify-between items-center px-2 md:px-4 py-3 border-b border-gray-200 bg-gray-50 text-sm md:text-base">
                    <span>Offline account</span>
                    <span className="bg-green-600 text-white text-xs font-semibold px-2 md:px-3 py-1 rounded">FREE</span>
                </div>

                <div className="flex justify-between items-center px-2 md:px-4 py-3 border-b border-gray-200 bg-white text-sm md:text-base">
                    <span>NRI account (offline only)</span>
                    <span className="text-gray-800">₹ 500</span>
                </div>

                <div className="flex justify-between items-center px-2 md:px-4 py-3 bg-gray-50 text-sm md:text-base">
                    <span className="pr-2">Partnership, LLP, HUF, or Corporate accounts (offline only)</span>
                    <span className="text-gray-800 whitespace-nowrap">₹ 500</span>
                </div>
            </div>
        </div>
    )
}

export default TableOne
