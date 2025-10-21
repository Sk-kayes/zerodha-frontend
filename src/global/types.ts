export interface SectionProps {
    imgSrc: string;
    title: string;
    description: string;
    btnOneTitle?: string;
    btnOneLink?: string;
    btnTwoTitle?: string;
    btnTwoLink?: string;
    btnThreeImgSrc?: string;
    btnThreeLink?: string;
    btnFourImgSrc?: string;
    btnFourLink?: string;
}

export interface PricingCardProps {
    title: string;
    description: string;
    imgSrc: string;
}

export interface SupportCardProps {
    title: string;
    icon: React.ReactNode;
}