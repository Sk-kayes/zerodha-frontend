import { type SupportCardProps } from "../../global/types"

const Card = ({ title, icon }: SupportCardProps) => {
    return (
        <div className='w-full max-w-[690px] h-[50px] md:h-[62px] border border-gray-200 rounded-sm flex items-center justify-between overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-200 cursor-pointer'>
            <div className='flex items-center'>
                <span className='h-[50px] md:h-[62px] flex items-center px-3 md:px-4 bg-[#F7FBFE] text-[18px] md:text-[20px] text-[#1976d2]'>
                    {icon}
                </span>
                <h3 className="ml-3 md:ml-4 text-[14px] md:text-[16px] text-[#424242] font-[500]">{title}</h3>
            </div>
            <span className='h-[50px] md:h-[62px] flex items-center px-3 md:px-4 text-[20px] md:text-[24px] text-[#1976d2]'>
                <i className="ri-arrow-down-s-line"></i>
            </span>
        </div>
    )
}

export default Card