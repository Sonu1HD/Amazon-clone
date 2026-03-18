import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#232f3e] text-white py-10">
                <div className='w-full bg-[#37475A] mb-11 h-11 items-center'>
                <a href="#" className=" text-sm text-gray-400 hover:text-white mb-2 w-full">Back to top</a>
                </div>
                <div className="container mx-auto flex flex-wrap justify-between">
                    {/* Get to Know Us */}
                    <div className="w-full sm:w-1/4 mb-6">
                        <h3 className="text-xl font-semibold mb-4">Get to Know Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">About Amazon</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Press Releases</a></li>
                            <li><a href="#" className="hover:underline">Amazon Science</a></li>
                        </ul>
                    </div>

                    {/* Connect with Us */}
                    <div className="w-full sm:w-1/4 mb-6">
                        <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                        </ul>
                    </div>

                    {/* Make Money with Us */}
                    <div className="w-full sm:w-1/4 mb-6">
                        <h3 className="text-xl font-semibold mb-4">Make Money with Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Sell on Amazon</a></li>
                            <li><a href="#" className="hover:underline">Sell under Amazon Accelerator</a></li>
                            <li><a href="#" className="hover:underline">Protect and Build Your Brand</a></li>
                            <li><a href="#" className="hover:underline">Amazon Global Selling</a></li>
                            <li><a href="#" className="hover:underline">Supply to Amazon</a></li>
                            <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
                            <li><a href="#" className="hover:underline">Fulfillment by Amazon</a></li>
                            <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
                            <li><a href="#" className="hover:underline">Amazon Pay on Merchants</a></li>
                        </ul>
                    </div>

                    {/* Let Us Help You */}
                    <div className="w-full sm:w-1/4 mb-6">
                        <h3 className="text-xl font-semibold mb-4">Let Us Help You</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Your Account</a></li>
                            <li><a href="#" className="hover:underline">Returns Centre</a></li>
                            <li><a href="#" className="hover:underline">Recalls and Product Safety Alerts</a></li>
                            <li><a href="#" className="hover:underline">100% Purchase Protection</a></li>
                            <li><a href="#" className="hover:underline">Amazon App Download</a></li>
                            <li><a href="#" className="hover:underline">Help</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 text-center border-2 border-gray-700 pt-6">

                    <div className="flex justify-center items-center space-x-6 mt-6">
                        <img src="https://www.pngmart.com/files/23/Amazon-White-Logo-PNG.png" alt="Amazon Logo" className="w-24" />
                        <div className="text-gray-400">
                            <span className="mr-2">English</span>|<span className="ml-2">India</span>
                        </div>
                    </div>
                    <div className="mt-4 text-xs text-gray-400">
                        <p>Conditions of Use & Sale | Privacy Notice | Interest-Based Ads</p>
                        <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer