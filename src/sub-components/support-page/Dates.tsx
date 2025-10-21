import React from 'react'

const Dates = () => {
    return (
<div>
    <div className="max-w-md w-full p-3 md:p-4 bg-[#FFF4E5] border-l-4 md:border-l-8 border-[#FF9100] rounded-lg font-sans">

        <ul className="space-y-2 text-[#397dd0]">

            <li className="list-disc ml-4 md:ml-5 mb-3 md:mb-4 pr-2">
                <a
                    href="#trading-holiday"
                    className="text-[#397dd0] hover:text-[#424242] hover:font-[400] transition-colors text-sm md:text-base lg:text-lg leading-relaxed underline"
                    style={{ hyphens: 'auto' }}
                >
                    Trading holiday on account of Diwali-Balipratipada on October 22, 2025
                </a>
            </li>

            <li className="list-disc ml-4 md:ml-5 pr-2">
                <a
                    href="#muhurat-trading"
                    className="text-[#397dd0] hover:text-[#424242] hover:font-[400] transition-colors text-sm md:text-base lg:text-lg leading-relaxed underline"
                    style={{ hyphens: 'auto' }}
                >
                    Muhurat Trading session on account of Diwali, October 2025
                </a>
            </li>

        </ul>
    </div>
</div>

    )
}

export default Dates