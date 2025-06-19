import { ChevronDown } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="py-2 bg-white text-white">
            <div className="container mx-auto flex justify-between items-center px-4 flex-wrap text-purple-900">
                <Link to="/">
                    <img src="https://eternatek.in/wp-content/uploads/2024/08/WhatsApp_Image_2024-08-31_at_11.46.53_AM-removebg-preview.png" alt="" className='w-[150px]' />
                </Link>
                <ul className="flex gap-6 items-center text-base font-medium relative">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/about" className="hover:underline">About</Link></li>
                    <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                    <li className="relative group">
                        <span className="cursor-pointer hover:underline flex align-center">Services <ChevronDown /> </span>
                        <ul className="absolute top-10 -left-20 z-50 w-52 bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 border-t">
                            <li>
                                <Link to="/services/web-development" className="block px-4 py-2 hover:bg-purple-100 text-purple-900">
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/app-development" className="block px-4 py-2 hover:bg-purple-100 text-purple-900">
                                    App Development
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/digital-marketing" className="block px-4 py-2 hover:bg-purple-100 text-purple-900">
                                    Digital Marketing
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/sales-and-services" className="block px-4 py-2 hover:bg-purple-100 text-purple-900">
                                    Sales & Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/saas-products" className="block px-4 py-2 hover:bg-purple-100 text-purple-900">
                                    SaaS Products
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li><Link>LogIn</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
