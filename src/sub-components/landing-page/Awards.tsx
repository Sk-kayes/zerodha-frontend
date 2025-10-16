import React from 'react'

const Awards = () => {
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-6'>
                    <img src="svg/largestBroker.svg" alt="" />
                </div>
                <div className='col-6 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mt-4'>2+ million Zerodha clients contribute to over 15% of all retauk order volumes in india daily by trading and inversting in:</p>
                    <div className='row mt-3'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Fetures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                        <img src='images/pressLogos.png' style={{width: "80%", marginTop: "20px"}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards
