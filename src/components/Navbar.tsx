import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='mb-18'>
            <div className='flex justify-between items-center px-10 py-6 max-w-7xl mx-auto border-b border-1 border-[#f3f3f3] fixed top-0 w-full bg-white z-50'>
                <div>
                    <Link to="/" >
                        <img src='svg/logo.svg' alt='Logo' className='w-[130px]' />
                    </Link>
                </div>
                <div className='hidden md:flex items-center space-x-6'>
                    <Link to="/signup" className='text-[#666] hover:text-[#387ed1] transition-colors'>Signup</Link>
                    <Link to="/about" className='text-[#666] hover:text-[#387ed1] transition-colors'>About</Link>
                    <Link to="/products" className='text-[#666] hover:text-[#387ed1] transition-colors'>Products</Link>
                    <Link to="/pricing" className='text-[#666] hover:text-[#387ed1] transition-colors'>Pricing</Link>
                    <Link to="/support" className='text-[#666] hover:text-[#387ed1] transition-colors'>Support</Link>
                </div>
                <div className='md:hidden'>
                    <i className="ri-menu-line text-2xl text-[#424242]"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar