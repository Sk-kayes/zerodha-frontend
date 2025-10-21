import Card from "./Card"
import Dates from "./Dates"
import Links from "./Links"

const CreateTicket = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-2 py-6 md:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="lg:col-span-2 space-y-3 md:space-y-4">
                    <Card title="Account Opening" icon={<i className="ri-add-circle-line"></i>} />
                    <Card title="Your Zerodha Account" icon={<i className="ri-account-circle-line"></i>} />
                    <Card title="Kite" icon={<i className="ri-direction-line"></i>} />
                    <Card title="Funds" icon={<i className="ri-money-rupee-circle-line"></i>} />
                    <Card title="Console" icon={<i className="ri-donut-chart-fill"></i>} />
                    <Card title="Coin" icon={<i className="ri-copper-coin-line"></i>} />
                </div>

                <aside className="lg:col-span-1 space-y-4 md:space-y-6 lg:order-last">
                    <div className="lg:sticky lg:top-20 space-y-4 md:space-y-6">
                        <Dates />
                        <Links />
                    </div>
                </aside>
            </div>
        </div>

    )
}

export default CreateTicket