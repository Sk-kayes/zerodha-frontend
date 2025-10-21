import Hero from '../../sub-components/products-page/Hero'
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
                <RightSection
                    imgSrc = "images/products-console.png"
                    title = "Console"
                    description = "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                    btnOneTitle = "Learn more"
                    btnOneLink = "#"
                />
                <LeftSection
                imgSrc = "svg/landing.svg" 
                title = "Coin"
                description = "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                btnOneTitle = "Coin"
                btnOneLink = "#"
                btnThreeImgSrc = "svg/google-play-badge.svg"
                btnThreeLink = "#"
                btnFourImgSrc = "svg/appstore-badge.svg"
                btnFourLink = "#"
                />
                <RightSection
                    imgSrc = "images/products-console.png"
                    title = "Kite Connect API"
                    description = "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                    btnOneTitle = "Kite Connect"
                    btnOneLink = "#"
                />
                <LeftSection
                imgSrc = "images/varsity-products.png" 
                title = "Varsity mobile"
                description = "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                btnThreeImgSrc = "svg/google-play-badge.svg"
                btnThreeLink = "#"
                btnFourImgSrc = "svg/appstore-badge.svg"
                btnFourLink = "#"
                />
            <Universe />
        </div>
    )
}

export default Products