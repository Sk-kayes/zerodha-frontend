import React from 'react'
import Hero from '../../sub-components/pricing-page/Hero'
import RightSection from '../../sub-components/products-page/RightSection'
import LeftSection from './../../sub-components/products-page/LeftSection';
import Universe from '../../sub-components/products-page/Universe';

const Products = () => {
    return (
        <div>
            <Hero />
            <LeftSection
                imgSrc = "images/products-kite.png" 
                title = "Kite"
                description = "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                btnOneTitle = "Try demo"
                btnOneLink = "#"
                btnTwoTitle = "Learn more"
                btnTwoLink = "#"
                btnThreeImgSrc = "svg/google-play-badge.svg"
                btnThreeLink = "#"
                btnFourImgSrc = "svg/appstore-badge.svg"
                btnFourLink = "#"
                />
                <RightSection />
                <LeftSection
                imgSrc = "images/products-kite.png" 
                title = "Kite"
                description = "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                btnOneTitle = "Try demo"
                btnOneLink = "#"
                btnTwoTitle = "Learn more"
                btnTwoLink = "#"
                btnThreeImgSrc = "svg/google-play-badge.svg"
                btnThreeLink = "#"
                btnFourImgSrc = "svg/appstore-badge.svg"
                btnFourLink = "#"
                />
                <RightSection />
                <LeftSection
                imgSrc = "images/products-kite.png" 
                title = "Kite"
                description = "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                btnOneTitle = "Try demo"
                btnOneLink = "#"
                btnTwoTitle = "Learn more"
                btnTwoLink = "#"
                btnThreeImgSrc = "svg/google-play-badge.svg"
                btnThreeLink = "#"
                btnFourImgSrc = "svg/appstore-badge.svg"
                btnFourLink = "#"
                />
                <RightSection />
            <Universe />
        </div>
    )
}

export default Products
