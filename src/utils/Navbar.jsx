
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
            className='w-[150px] h-auto' 
          />
        </NavLink>
        
        <div className="flex gap-6 items-center text-base font-medium">
          <NavLink to="/" className={({ isActive }) =>
          isActive
            ? "bg-green-400 text-white px-3 py-1 rounded transition-colors"
            : "text-gray-700  hover:text-orange-800 hover:bg-green-100 px-3 py-1 rounded transition-colors"
        }>
            Home
          </NavLink>
          
          <NavLink to="/about" className={({ isActive }) =>
          isActive
            ? "bg-green-400 text-white px-3 py-1 rounded transition-colors"
            : "text-gray-700  hover:text-orange-800 hover:bg-green-100 px-3 py-1 rounded transition-colors"
        }>
            About
          </NavLink>
          
          <NavLink to="/contact" className={({ isActive }) =>
          isActive
            ? "bg-green-400 text-white px-3 py-1 rounded transition-colors"
            : "text-gray-700 hover:text-orange-800 hover:bg-green-100 px-3 py-1 rounded transition-colors"
        }>
            Contact
          </NavLink>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={({ isActive }) =>
          isActive
            ? "bg-green-400 text-white px-3 py-1 rounded transition-colors"
            : "text-gray-700  hover:text-orange-800 hover:bg-green-100 px-3 py-1 rounded transition-colors"
        }>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-52 p-3">
                    {serviceLinks.map((service) => (
                      <NavLink
                        key={service.to}
                        to={service.to}
                        className={({ isActive }) => 
                          `block px-4 py-2 rounded-md hover:bg-yellow-100 text-purple-600 hover:text-yellow-500 transition-colors duration-200 ${
                            isActive ? 'bg-red-100 font-semibold text-red-500' : ''
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
            ? "bg-green-400 text-white px-3 py-1 rounded transition-colors"
            : "text-gray-700 hover:text-orange-800 hover:bg-green-100 px-3 py-1 rounded transition-colors"
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
