const Footer = () => {
    return (
        <div className="border-t border-[#eee] bg-[#FBFBFB] p-5 mt-12">
            <div className="upper max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 items-start">
                    <div className="left lg:col-span-1 flex flex-col items-center lg:items-start">
                        <img src="svg/logo.svg" alt="logo" className="w-32 md:w-36 mb-4" />
                        <p className="text-[#666666] text-[12px] leading-tight mb-2 text-center lg:text-left">
                            © 2010 - 2025, Zerodha Broking Ltd.<br />
                        </p>
                        <p className="text-[#666666] text-[12px] leading-tight mb-4 text-center lg:text-left">
                            All rights reserved.
                        </p>
                        <div className="flex items-center gap-3 text-xl md:text-2xl text-[#424242]">
                            <i className="ri-twitter-x-line cursor-pointer" />
                            <i className="ri-facebook-box-fill hover:text-[#106eea] cursor-pointer" />
                            <i className="ri-instagram-line hover:text-[#106eea] cursor-pointer" />
                            <i className="ri-linkedin-fill hover:text-[#106eea] cursor-pointer" />
                        </div>
                        <div className="w-full border-t border-[#eee] my-3" />
                        <div className="flex items-center gap-3 text-xl md:text-2xl text-[#424242]">
                            <i className="ri-youtube-fill cursor-pointer" />
                            <i className="ri-whatsapp-line cursor-pointer" />
                            <i className="ri-telegram-fill hover:text-[#106eea] cursor-pointer" />
                        </div>
                    </div>

                    <div className="right lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:ml-12">
                        <div>
                            <ul className="list-none">
                                <li className="text-[#424242] mb-3 text-[18px] font-[500]">Account</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Open demat account</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Minor demat account</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">NRI demat account</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Commodity</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Dematerialisation</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Fund transfer</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">MTF</li>
                                <li className="text-sm text-[#666666] hover:text-[#106eea] transition-colors cursor-pointer">Referral program</li>
                            </ul>
                        </div>

                        <div>
                            <ul className="list-none">
                                <li className="text-[#424242] mb-3 text-[18px] font-[500]">Support</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Contact us</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Support portal</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">How to file a complaint?</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Status of your complaints</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Bulletin</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Circular</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Z-Connect blog</li>
                                <li className="text-sm text-[#666666] hover:text-[#106eea] transition-colors cursor-pointer">Downloads</li>
                            </ul>
                        </div>

                        <div>
                            <ul className="list-none">
                                <li className="text-[#424242] mb-3 text-[18px] font-[500]">Company</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">About</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Philosophy</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Press & media</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Careers</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Zerodha Cares (CSR)</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Zerodha.tech</li>
                                <li className="text-sm text-[#666666] hover:text-[#106eea] transition-colors cursor-pointer">Open source</li>
                            </ul>
                        </div>

                        <div>
                            <ul className="list-none">
                                <li className="text-[#424242] mb-3 text-[18px] font-[500]">Quick links</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Upcoming IPOs</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Brokerage charges</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Market holidays</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Economic calendar</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Calculators</li>
                                <li className="text-sm text-[#666666] mb-4 hover:text-[#106eea] transition-colors cursor-pointer">Markets</li>
                                <li className="text-sm text-[#666666] hover:text-[#106eea] transition-colors cursor-pointer">Sectors</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower">
                <div className="max-w-7xl mx-auto px-6 py-8 text-[#8b9498]">
                    <div className="prose prose-sm prose-neutral max-w-none text-[12px] md:text-[12px] space-y-4">
                        <p>
                            Zerodha Broking Ltd.: Member of NSE, BSE &amp; MCX – SEBI Registration no.: INZ000031633
                            CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.:
                            IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
                            Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
                            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
                            Karnataka, India. For any complaints pertaining to securities broking please write to
                            <a href="mailto:complaints@zerodha.com" className="ml-1 text-[#106eea] hover:underline">complaints@zerodha.com</a>,
                            for DP related to
                            <a href="mailto:dp@zerodha.com" className="ml-1 text-[#106eea] hover:underline">dp@zerodha.com</a>.
                            Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                        </p>

                        <p>
                            Procedure to file a complaint on
                            <a href="#" className="ml-1 text-[#106eea] hover:underline">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing
                            complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                            Communication, Speedy redressal of the grievances
                        </p>

                        <p>
                            <a href="#" className="text-[#106eea] hover:underline">Smart Online Dispute Resolution</a> |{' '}
                            <a href="#" className="text-[#106eea] hover:underline">Grievances Redressal Mechanism</a>
                        </p>

                        <p>
                            Investments in securities market are subject to market risks; read all the related documents
                            carefully before investing.
                        </p>

                        <p>
                            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way
                            of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone
                            number with your stock broker / depository participant and receive OTP directly from depository
                            on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in
                            the consolidated account statement issued by NSDL/CDSL every month.
                        </p>

                        <p>
                            India&apos;s largest broker based on networth as per NSE.
                            <a href="#" className="ml-1 text-[#106eea] hover:underline">NSE broker factsheet</a>
                        </p>

                        <p>
                            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your
                            stock brokers. Receive information of your transactions directly from Exchange on your
                            mobile/email at the end of the day. Issued in the interest of investors. KYC is one time
                            exercise while dealing in securities markets - once KYC is done through a SEBI registered
                            intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when
                            you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no
                            need to issue a cheque. Please write the Bank account number and sign the IPO application form
                            to authorize your bank to make payment in case of allotment. In case of non allotment the funds
                            will remain in your bank account. As a business we don&apos;t give stock tips, and have not
                            authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha
                            and offering such services,
                            <a href="#" className="ml-1 text-[#106eea] hover:underline">create a ticket here</a>.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-center gap-x-6 gap-y-4 text-[13px] text-[#8b9498]">
                <a href="#" className="hover:text-[#106eea] transition-colors">NSE</a>
                <a href="#" className="hover:text-[#106eea] transition-colors">BSE</a>
                <a href="#" className="hover:text-[#106eea] transition-colors">MCX</a>
                <a href="#" className="hover:text-[#106eea] transition-colors">Terms &amp; conditions</a>
                <a href="#" className="hover:text-[#106eea] transition-colors">Policies &amp; procedures</a>
                <a href="#" className="hover:text-[#106eea] transition-colors">Privacy policy</a>
                <a href="#" className="hover:text-[#106eea] transition-colors">Disclosure</a>
                <a href="#" className="hover:text-[#106eea] transition-colors">For investor&apos;s attention</a>
                <a href="#" className="hover:text-[#106eea] transition-colors">Investor charter</a>
            </div>
        </div>
    )
}

export default Footer