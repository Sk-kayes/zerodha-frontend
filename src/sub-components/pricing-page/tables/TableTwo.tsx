import React from 'react'

const TableTwo = () => {
    return (
        <div className="max-w-6xl mx-auto my-6 md:my-10 px-4">
            <h2 className="text-[18px] md:text-[22px] font-[500] text-[#424242] mb-4">
                Demat AMC (Annual Maintenance Charge)
            </h2>

            <div className="border border-gray-300 rounded-md overflow-hidden">
                <div className="flex justify-between bg-gray-50 border-b border-gray-300 px-2 md:px-4 py-3 font-medium text-gray-700 text-sm md:text-base">
                    <span>Value of holdings</span>
                    <span>AMC</span>
                </div>

                <div className="flex justify-between items-center px-2 md:px-4 py-3 border-b border-gray-200 bg-white text-sm md:text-base">
                    <span>Up to ₹4 lakh</span>
                    <span className="bg-green-600 text-white text-xs font-semibold px-2 md:px-3 py-1 rounded">
                        FREE*
                    </span>
                </div>

                <div className="flex justify-between items-center px-2 md:px-4 py-3 border-b border-gray-200 bg-gray-50 text-sm md:text-base">
                    <span>₹4 lakh - ₹10 lakh</span>
                    <span className="text-gray-800 text-right">₹ 100 per year, charged quarterly*</span>
                </div>

                <div className="flex justify-between items-center px-2 md:px-4 py-3 bg-white text-sm md:text-base">
                    <span>Above ₹10 lakh</span>
                    <span className="text-gray-800 text-right">₹ 300 per year, charged quarterly</span>
                </div>
            </div>

            <p className="text-[12px] md:text-[14px] text-[#666] mt-3 leading-relaxed">
                * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA).
                BSDA account holders cannot hold more than one demat account.
                To learn more about BSDA,
                <a href="#" className="text-blue-600 hover:underline ml-1">click here.</a>
            </p>
        </div>

    )
}

export default TableTwo