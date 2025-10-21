import { type PricingCardProps } from "../../global/types"

const Card = ( { title, description, imgSrc }: PricingCardProps ) => {
    return (
        <div className="flex flex-col items-center max-w-[280px] md:max-w-[320px] px-4">
            <img 
                src={imgSrc} 
                alt="" 
                className="w-[200px] md:w-[250px] h-[140px] md:h-[185px] mb-2 object-contain" 
            />
            <h2 className="text-[16px] md:text-lg text-[#212121] font-medium mb-2 text-center">
                {title}
            </h2>
            <p className="text-[#7b7b7b] text-[14px] md:text-base leading-relaxed text-center">
                {description}
            </p>
        </div>
    )
}

export default Card