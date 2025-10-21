import { type SectionProps } from "../../global/types"
const RightSection = ({ imgSrc, title, description, btnOneTitle, btnOneLink }: SectionProps) => {
    return (
        <section className="bg-white py-2 sm:py-12 md:py-2 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
                <div className="flex-1 flex justify-center md:justify-end">
                    <img
                        src= {imgSrc}
                        alt="Platform"
                        className="w-full max-w-[400px] sm:max-w-[520px] h-auto object-contain"
                    />
                </div>

                <div className="text-center md:text-left md:w-[350px] px-4 sm:px-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#111827] mb-4">
                        {title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#374151] font-[400] mb-6 leading-relaxed">
                        {description}
                    </p>

                    <a
                        href= {btnOneLink}
                        className="text-[#1a73e8] inline-flex items-center gap-2 hover:text-black font-[400]"
                    >
                        {btnOneTitle}
                        <i className="ri-arrow-right-line" />
                    </a>
                </div>
            </div>
        </section>

    )
}

export default RightSection