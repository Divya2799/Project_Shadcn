
// import { ChevronDown } from 'lucide-react'
// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu"



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';


// // const Navbar = () => {
// //   const navLinkClasses = ({ isActive }) =>
// //     `hover:text-yellow-500 transition-colors duration-200 ${isActive ? 'text-red-500 font-semibold underline' : 'text-purple-600'
// //     }`

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   const toggleServices = () => {
//     setIsServicesOpen(!isServicesOpen);
//   };


//   const serviceLinks = [
//     { to: "/services/web-development", label: "Web Development" },
//     { to: "/services/app-development", label: "App Development" },
//     { to: "/services/digital-marketing", label: "Digital Marketing" },
//     { to: "/services/sales-and-services", label: "Sales & Services" },
//     { to: "/services/saas-products", label: "SaaS Products" },
//   ]

//   return (
//     <nav className="p-1 bg-white shadow-sm">
//       <div className="container mx-auto flex justify-between items-center px-4 flex-wrap">
//         <NavLink to="/">
//           <img
//             src="https://eternatek.in/wp-content/uploads/2024/08/WhatsApp_Image_2024-08-31_at_11.46.53_AM-removebg-preview.png"
//             alt="Logo"
//             className='w-[160px] h-[50px]'
//           />
//         </NavLink>
//         <h1 className='hidden font-bold max-[1020px]:block'>
//          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
//           </h1>
//         <div className="flex w-auto gap-12 items-center text-base font-medium justify-center max-[1020px]:hidden">
//           <NavLink to="/" className={({ isActive }) =>
//             isActive
//               ? "bg-gradient-to-r from-purple-600 to-black text-white px-3 py-1 rounded-lg font-semibold shadow-lg transform scale-105 border border-purple-500 transition-all duration-ease-in-out"
//               : "hover:text-purple-800 hover:bg-purple-100 px-3 py-1 rounded transition-colors text-gray-700"
//           }>
//             Home
//           </NavLink>

//           <NavLink to="/about" className={({ isActive }) =>
//             isActive
//               ? "bg-gradient-to-r from-purple-600 to-black text-white px-3 py-1 rounded-lg font-semibold shadow-lg transform scale-105 border border-purple-500 transition-all duration-ease-in-out"
//               : "hover:text-purple-800 hover:bg-purple-100 px-3 py-1 rounded transition-colors text-gray-700"
//           }>
//             About
//           </NavLink>

//           <NavLink to="/contact" className={({ isActive }) =>
//             isActive
//               ? " bg-gradient-to-r from-purple-600 to-black text-white px-3 py-1 rounded-lg font-semibold shadow-lg transform scale-105 border border-purple-500 transition-all duration-ease-in-out"
//               : "hover:text-purple-800 hover:bg-purple-100 px-3 py-1 rounded transition-colors text-gray-700"
//           }>
//             Contact
//           </NavLink>

//           <NavigationMenu className="w-auto">
//             <NavigationMenuList >
//               <NavigationMenuItem >
//                 <NavigationMenuTrigger className={({ isActive }) =>
//                   isActive
//                     ? "bg-gradient-to-r from-purple-600 to-black text-white rounded-lg font-semibold shadow-lg transform scale-105 border border-purple-500 transition-all duration-ease-in-out"
//                     : "hover:text-purple-800 hover:bg-purple-100 px-3 py-1 rounded transition-colors text-gray-700"
//                 }>
//                   Services
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent className="bg-black shadow-lg ">
//                   <div className="p-2 w-[200px] gap-2">
//                     {serviceLinks.map((service) => (
//                       <NavLink
//                         key={service.to}
//                         to={service.to}
//                         className={({ isActive }) =>
//                           `flex items-center justify-center px-4 py-2 rounded-lg transition-colors duration-200 ${isActive
//                             ? 'bg-white text-black font-semibold'
//                             : 'bg-black text-purple-600 hover:bg-white hover:text-black'

//                           }`
//                         }
//                       >
//                         {service.label}
//                       </NavLink>
//                     ))}
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>

//           <NavLink
//             to="/login"
//             className={({ isActive }) =>
//               isActive
//                 ? "bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold py-1 px-3 rounded-lg shadow-lg transform scale-105 border-2 border-purple-500"
//                 : "text-purple-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-800 px-3 py-1 rounded-lg transition-all duration-300 ease-in-out border-2 border-purple-600 bg-white shadow-md hover:shadow-lg hover:scale-105"
//             }
//           >
//             LogIn
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar


import { ChevronDown, Menu } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet"
import { Button } from "../components/ui/button"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const serviceLinks = [
    { to: "/services/web-development", label: "Web Development" },
    { to: "/services/app-development", label: "App Development" },
    { to: "/services/digital-marketing", label: "Digital Marketing" },
    { to: "/services/sales-and-services", label: "Sales & Services" },
    { to: "/services/saas-products", label: "SaaS Products" },
  ]

  return (
    <nav className="p-1 bg-white shadow-sm relative">
      <div className="container mx-auto flex justify-between items-center px-4 flex-wrap">
        <NavLink to="/">
          <img
            src="https://eternatek.in/wp-content/uploads/2024/08/WhatsApp_Image_2024-08-31_at_11.46.53_AM-removebg-preview.png"
            alt="Logo"
            className='w-[160px] h-[50px]'
          />
        </NavLink>
        
       
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon"
              className='lg:hidden text-purple-600 hover:text-purple-800 hover:bg-purple-100 bg:white'
            >
              <Menu className="h-7 w-7 font-extrabold" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-90 p-10 bg-white h-auto">
            <SheetHeader>
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-8">
              <NavLink 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-black text-white px-4 py-3 rounded-lg font-semibold shadow-lg border border-purple-500 text-center"
                    : "hover:text-purple-800 hover:bg-purple-100 px-4 py-3 rounded transition-colors text-gray-700 text-center border border-gray-200"
                }>
                Home
              </NavLink>

              <NavLink 
                to="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-black text-white px-4 py-3 rounded-lg font-semibold shadow-lg border border-purple-500 text-center"
                    : "hover:text-purple-800 hover:bg-purple-100 px-4 py-3 rounded transition-colors text-gray-700 text-center border border-gray-200"
                }>
                About
              </NavLink>

              <NavLink 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-black text-white px-4 py-3 rounded-lg font-semibold shadow-lg border border-purple-500 text-center"
                    : "hover:text-purple-800 hover:bg-purple-100 px-4 py-3 rounded transition-colors text-gray-700 text-center border border-gray-200"
                }>
                Contact
              </NavLink>

              
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={toggleServices}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-purple-800 hover:bg-purple-100 rounded-lg transition-colors"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-2 bg-gray-50 rounded-b-lg">
                    {serviceLinks.map((service) => (
                      <NavLink
                        key={service.to}
                        to={service.to}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-2 rounded-lg transition-colors duration-200 text-sm ${
                            isActive
                              ? 'bg-purple-600 text-white font-semibold'
                              : 'text-purple-600 hover:bg-purple-100 hover:text-purple-800'
                          }`
                        }
                      >
                        {service.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              <NavLink
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold py-3 px-4 rounded-lg shadow-lg border-2 border-purple-500 text-center"
                    : "text-purple-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-800 px-4 py-3 rounded-lg transition-all duration-300 ease-in-out border-2 border-purple-600 bg-white shadow-md hover:shadow-lg text-center"
                }
              >
                LogIn
              </NavLink>
            </div>
          </SheetContent>
        </Sheet>

       
        <div className="flex w-auto gap-12 items-center text-base font-medium justify-center max-lg:hidden">
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
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-purple-800 hover:bg-purple-100 px-3 py-1 rounded transition-colors text-gray-700 data-[state=open]:bg-purple-100 data-[state=open]:text-purple-800">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-lg border rounded-lg">
                  <div className="p-2 w-[200px] gap-2">
                    {serviceLinks.map((service) => (
                      <NavLink
                        key={service.to}
                        to={service.to}
                        className={({ isActive }) =>
                          `flex items-center justify-center px-4 py-2 rounded-lg transition-colors duration-200 ${isActive
                            ? 'bg-purple-600 text-white font-semibold'
                            : 'text-purple-600 hover:bg-purple-100 hover:text-purple-800'
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

export default Navbar;
