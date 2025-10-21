import React from 'react'

const TableThree = () => {
    return (
        <div className="max-w-6xl mx-auto my-6 md:my-10 px-4">
            <h2 className="text-[18px] md:text-[22px] font-[500] text-[#424242] mb-4">
                Charges for optional value added services
            </h2>

            <div className="border border-gray-300 rounded-md overflow-hidden">
                <div className="hidden md:grid grid-cols-3 bg-gray-50 border-b border-gray-300 px-4 py-3 font-medium text-gray-700">
                    <span>Service</span>
                    <span>Billing Frequency</span>
                    <span>Charges</span>
                </div>

                {/* Mobile view */}
                <div className="md:hidden">
                    <div className="px-4 py-3 border-b border-gray-200 bg-white">
                        <div className="font-medium text-gray-700 mb-2">Tickertape</div>
                        <div className="text-sm text-gray-600 mb-1">Monthly / Annual</div>
                        <div className="text-sm">Free: 0 | Pro: 249/2399</div>
                    </div>
                    <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
                        <div className="font-medium text-gray-700 mb-2">Smallcase</div>
                        <div className="text-sm text-gray-600 mb-1">Per transaction</div>
                        <div className="text-sm">Buy & Invest More: 100 | SIP: 10</div>
                    </div>
                    <div className="px-4 py-3 bg-white">
                        <div className="font-medium text-gray-700 mb-2">Kite Connect</div>
                        <div className="text-sm text-gray-600 mb-1">Monthly</div>
                        <div className="text-sm">Connect: 500 | Personal: Free</div>
                    </div>
                </div>

                {/* Desktop view */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-3 items-center px-4 py-3 border-b border-gray-200 bg-white">
                        <span>Tickertape</span>
                        <span>Monthly / Annual</span>
                        <span>Free: 0 | Pro: 249/2399</span>
                    </div>

                    <div className="grid grid-cols-3 items-center px-4 py-3 border-b border-gray-200 bg-gray-50">
                        <span>Smallcase</span>
                        <span>Per transaction</span>
                        <span>Buy & Invest More: 100 | SIP: 10</span>
                    </div>

                    <div className="grid grid-cols-3 items-center px-4 py-3 bg-white">
                        <span>Kite Connect</span>
                        <span>Monthly</span>
                        <span>Connect: 500 | Personal: Free</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TableThree