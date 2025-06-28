
import { ChevronDown } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const navLinkClasses = ({ isActive }) =>
    `hover:text-yellow-500 transition-colors duration-200 ${isActive ? 'text-red-500 font-semibold underline' : 'text-purple-600'
    }`

  const serviceLinks = [
    { to: "/services/web-development", label: "Web Development" },
    { to: "/services/app-development", label: "App Development" },
    { to: "/services/digital-marketing", label: "Digital Marketing" },
    { to: "/services/sales-and-services", label: "Sales & Services" },
    { to: "/services/saas-products", label: "SaaS Products" },
  ]

  return (
    <nav className="p-1 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 flex-wrap">
        <NavLink to="/">
          <img
            src="https://eternatek.in/wp-content/uploads/2024/08/WhatsApp_Image_2024-08-31_at_11.46.53_AM-removebg-preview.png"
            alt="Logo"
            className='w-[160px] h-[50px]'
          />
        </NavLink>
        <h1 className='hidden font-bold max-[1020px]:block'>
         <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </h1>
        <div className="flex w-auto gap-12 items-center text-base font-medium justify-center max-[1020px]:hidden">
          <NavLink to="/" className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-purple-600 to-black text-white px-3 py-1 rounded-lg font-semibold shadow-lg transform scale-105 border border-purple-500 transition-all duration-ease-in-out"
              : "hover:text-purple-800 hover:bg-purple-100 px-3 py-1 rounded transition-colors text-gray-700"
          }>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-purple-600 to-black text-white px-3 py-1 rounded-lg font-semibold shadow-lg transform scale-105 border border-purple-500 transition-all duration-ease-in-out"
              : "hover:text-purple-800 hover:bg-purple-100 px-3 py-1 rounded transition-colors text-gray-700"
          }>
            About
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) =>
            isActive
              ? " bg-gradient-to-r from-purple-600 to-black text-white px-3 py-1 rounded-lg font-semibold shadow-lg transform scale-105 border border-purple-500 transition-all duration-ease-in-out"
              : "hover:text-purple-800 hover:bg-purple-100 px-3 py-1 rounded transition-colors text-gray-700"
          }>
            Contact
          </NavLink>

          <NavigationMenu className="w-auto">
            <NavigationMenuList >
              <NavigationMenuItem >
                <NavigationMenuTrigger className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-black text-white rounded-lg font-semibold shadow-lg transform scale-105 border border-purple-500 transition-all duration-ease-in-out"
                    : "hover:text-purple-800 hover:bg-purple-100 px-3 py-1 rounded transition-colors text-gray-700"
                }>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black shadow-lg ">
                  <div className="p-2 w-[200px] gap-2">
                    {serviceLinks.map((service) => (
                      <NavLink
                        key={service.to}
                        to={service.to}
                        className={({ isActive }) =>
                          `flex items-center justify-center px-4 py-2 rounded-lg transition-colors duration-200 ${isActive
                            ? 'bg-white text-black font-semibold'
                            : 'bg-black text-purple-600 hover:bg-white hover:text-black'

                          }`
                        }
                      >
                        {service.label}
                      </NavLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold py-1 px-3 rounded-lg shadow-lg transform scale-105 border-2 border-purple-500"
                : "text-purple-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-800 px-3 py-1 rounded-lg transition-all duration-300 ease-in-out border-2 border-purple-600 bg-white shadow-md hover:shadow-lg hover:scale-105"
            }
          >
            LogIn
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
