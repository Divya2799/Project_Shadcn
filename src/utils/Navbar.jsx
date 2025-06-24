
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
import { Button } from "@/components/ui/Button"

const Navbar = () => {
  const navLinkClasses = ({ isActive }) => 
    `hover:text-yellow-500 transition-colors duration-200 ${
      isActive ? 'text-red-500 font-semibold underline' : 'text-purple-600'
    }`

  const serviceLinks = [
    { to: "/services/web-development", label: "Web Development" },
    { to: "/services/app-development", label: "App Development" },
    { to: "/services/digital-marketing", label: "Digital Marketing" },
    { to: "/services/sales-and-services", label: "Sales & Services" },
    { to: "/services/saas-products", label: "SaaS Products" },
  ]

  return (
    <nav className="py-2 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 flex-wrap">
        <NavLink to="/">
          <img 
            src="https://eternatek.in/wp-content/uploads/2024/08/WhatsApp_Image_2024-08-31_at_11.46.53_AM-removebg-preview.png" 
            alt="Logo" 
            className='w-[210px] h-auto' 
          />
        </NavLink>
        
        <div className="flex w-auto gap-12 items-center text-base font-medium justify-center ">
          <NavLink to="/" className={({ isActive }) =>
           isActive
          ? "bg-gradient-to-r from-purple-600 to-black text-white px-4 py-2 rounded-lg font-semibold shadow-lg transform scale-105 border border-purple-500 transition-all duration-ease-in-out"
          : "hover:text-purple-800 hover:bg-purple-100 px-3 py-1 rounded transition-colors text-gray-700"
          }>
          Home
         </NavLink>
          
          <NavLink to="/about" className={({ isActive }) =>
          isActive
          ? "bg-gradient-to-r from-purple-600 to-black text-white px-4 py-2 rounded-lg font-semibold shadow-lg transform scale-105 border border-purple-500 transition-all duration-ease-in-out"
          : "hover:text-purple-800 hover:bg-purple-100 px-3 py-1 rounded transition-colors text-gray-700"
          }>
            About
          </NavLink>
          
          <NavLink to="/contact" className={({ isActive }) =>
          isActive
          ? " bg-gradient-to-r from-purple-600 to-black text-white px-4 py-2 rounded-lg font-semibold shadow-lg transform scale-105 border border-purple-500 transition-all duration-ease-in-out"
          : "hover:text-purple-800 hover:bg-purple-100 px-3 py-1 rounded transition-colors text-gray-700"
          }>
          Contact
          </NavLink>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={({ isActive }) =>
          isActive
          ? "bg-gradient-to-r from-purple-600 to-black text-white px-4 py-2 rounded-lg font-semibold shadow-lg transform scale-105 border border-purple-500 transition-all duration-ease-in-out"
          : "hover:text-purple-800 hover:bg-purple-100 px-3 py-1 rounded transition-colors text-gray-700"
          }>
          Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-52 bg-black rounded-md">
                    {serviceLinks.map((service) => (
                      <NavLink
                        key={service.to}
                        to={service.to}
                        className={({ isActive }) => 
                      `block p-3 bg-black hover:bg-white text-purple-600 hover:text-black transition-colors duration-200 ${
                        isActive ? 'bg-white font-semibold text-black' : ''
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
         ? "bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform scale-105 border-2 border-purple-500"
         : "text-purple-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-800 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out border-2 border-purple-600 bg-white shadow-md hover:shadow-lg hover:scale-105"
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
