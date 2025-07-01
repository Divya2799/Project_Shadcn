import React from 'react'
import { Button } from '../components/ui/button'
import AccordionDemo from '../components/myComponents/AccordionDemo'
import { CircleChevronDown, Database, Mic, PieChart, BrainCircuit, AppWindow } from 'lucide-react'
import { ArrowRight, Code, Cpu, Sparkles } from 'lucide-react'
import "../index.css"
import "../App.css"
const Home = () => {

  const dataServices = [
    {
      id: 1,
      title: "Data",
      icon: <Database className="w-10 h-10 white " />,
      description: "Our Data service focuses on the collection, analysis, and interpretation of data to drive informed decision-making. We help organizations harness the power of data by implementing robust data management systems, analytics tools, and reporting frameworks",
    },
    {
      id: 2,
      title: "Strategic Plans",
      icon: <Mic className="w-10 h-10 white " />,
      description: "Our strategic plan provides a detailed framework for guiding an organization in delivering its services effectively while achieving long-term objectives. By leveraging advanced analytics and market research, we provide organizations with a comprehensive understanding of their market, customers, and performance.",
    },
    {
      id: 3,
      title: "TransformEdge",
      icon: <PieChart className="w-10 h-10 white " />,
      description: "Our TransformEdge service focuses on guiding organizations through digital transformation initiatives that enhance operational efficiency and foster innovation. We assist in developing strategies that leverage technology to streamline processes and improve customer engagement.",
    },
    {
      id: 4,
      title: "Technology",
      icon: <CircleChevronDown className="w-10 h-10 white " />,
      description: "Our Technology service encompasses the design, implementation, and management of technology solutions that empower organizations to achieve their objectives. We provide expertise in various technological domains, ensuring that businesses stay competitive in a rapidly evolving landscape.",
    },
    {
      id: 5,
      title: "SaaS Based Applications",
      icon: <AppWindow className="w-10 h-10 white " />,
      description: "We deliver modern SaaS solutions tailored to streamline business workflows, reduce costs, and improve scalability, ensuring your digital products stay competitive and user-friendly.",
    },
    {
      id: 6,
      title: "AI Services",
      icon: <BrainCircuit className="w-10 h-10 white " />,
      description: "Our AI services include predictive analytics, machine learning models, and intelligent automation to help businesses enhance decision-making and deliver personalized experiences.",
    },
  ]

  return (
    <div>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated Circular Sparkles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Circular Sparkle 1 */}
          <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-sparkle-circle-1 opacity-70 shadow-lg shadow-yellow-400/50"></div>

          {/* Circular Sparkle 2 */}
          <div className="absolute w-3 h-3 bg-blue-400 rounded-full animate-sparkle-circle-2 opacity-60 shadow-lg shadow-blue-400/50"></div>

          {/* Circular Sparkle 3 */}
          <div className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full animate-sparkle-circle-3 opacity-80 shadow-lg shadow-purple-400/50"></div>

          {/* Circular Sparkle 4 */}
          <div className="absolute w-2.5 h-2.5 bg-pink-400 rounded-full animate-sparkle-circle-4 opacity-65 shadow-lg shadow-pink-400/50"></div>

          {/* Circular Sparkle 5 */}
          <div className="absolute w-2 h-2 bg-green-400 rounded-full animate-sparkle-circle-5 opacity-75 shadow-lg shadow-green-400/50"></div>

          {/* Circular Sparkle 6 */}
          <div className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-sparkle-circle-6 opacity-55 shadow-lg shadow-cyan-400/50"></div>

          {/* Circular Sparkle 7 */}
          <div className="absolute w-3.5 h-3.5 bg-orange-400 rounded-full animate-sparkle-circle-7 opacity-70 shadow-lg shadow-orange-400/50"></div>

          {/* Circular Sparkle 8 */}
          <div className="absolute w-1.5 h-1.5 bg-indigo-400 rounded-full animate-sparkle-circle-8 opacity-60 shadow-lg shadow-indigo-400/50"></div>

          {/* Additional circular sparkles for more density */}
          <div className="absolute w-2 h-2 bg-white rounded-full animate-sparkle-circle-9 opacity-50 shadow-lg shadow-white/50"></div>
          <div className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-sparkle-circle-10 opacity-45 shadow-lg shadow-yellow-300/50"></div>
          <div className="absolute w-2.5 h-2.5 bg-rose-400 rounded-full animate-sparkle-circle-11 opacity-65 shadow-lg shadow-rose-400/50"></div>
          <div className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full animate-sparkle-circle-12 opacity-70 shadow-lg shadow-emerald-400/50"></div>
        </div>

        {/* Orbital Moving Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Orbital Line 1 - Large circle */}
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-full h-full border border-yellow-400/30 rounded-full animate-orbit-1">
              <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -top-1.5 left-1/2 -translate-x-1/2 shadow-lg shadow-yellow-400/50"></div>
            </div>
          </div>

          {/* Orbital Line 2 - Medium circle */}
          <div className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-full h-full border border-blue-400/25 rounded-full animate-orbit-2">
              <div className="absolute w-2 h-2 bg-blue-400 rounded-full -top-1 left-1/2 -translate-x-1/2 shadow-lg shadow-blue-400/50"></div>
            </div>
          </div>

          {/* Orbital Line 3 - Small circle */}
          <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-full h-full border border-purple-400/20 rounded-full animate-orbit-3">
              <div className="absolute w-2.5 h-2.5 bg-purple-400 rounded-full -top-1.25 left-1/2 -translate-x-1/2 shadow-lg shadow-purple-400/50"></div>
            </div>
          </div>

          {/* Orbital Line 4 - Extra large circle */}
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-full h-full border border-pink-400/15 rounded-full animate-orbit-4">
              <div className="absolute w-1.5 h-1.5 bg-pink-400 rounded-full -top-0.75 left-1/2 -translate-x-1/2 shadow-lg shadow-pink-400/50"></div>
            </div>
          </div>

          {/* Orbital Line 5 - Reverse direction */}
          <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-full h-full border border-green-400/25 rounded-full animate-orbit-reverse-1">
              <div className="absolute w-2 h-2 bg-green-400 rounded-full -top-1 left-1/2 -translate-x-1/2 shadow-lg shadow-green-400/50"></div>
            </div>
          </div>

          {/* Orbital Line 6 - Small reverse */}
          <div className="absolute top-1/2 left-1/2 w-56 h-56 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-full h-full border border-cyan-400/20 rounded-full animate-orbit-reverse-2">
              <div className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full -top-0.75 left-1/2 -translate-x-1/2 shadow-lg shadow-cyan-400/50"></div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
              Create{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Beautiful
              </span>
              <br />
              Digital{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Experiences
                </span>
                {/* Blinking underline that moves left to right */}
                <div className="absolute -bottom-2 left-0 w-full h-1 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-underline-blink"></div>
                </div>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Crafting innovative solutions with{' '}
              <span className="text-yellow-400 font-semibold">cutting-edge technology</span>
              {' '}and{' '}
              <span className="text-blue-400 font-semibold">creative design</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group px-8 py-4 border-2 border-gray-400 text-gray-300 rounded-full font-semibold text-lg transition-all duration-300 hover:border-white hover:text-white hover:bg-white/10">
                Learn More
              </button>
            </div>

            {/* Floating Elements */}
            <div className="mt-16 flex justify-center space-x-8">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce-slow opacity-70"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce-slower opacity-60"></div>
              <div className="w-4 h-4 bg-purple-400 rounded-full animate-bounce-slowest opacity-80"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce-slow opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Bottom fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="hero flex flex-col lg:flex-row justify-between items-center p-6 gap-10">
        <div className="content space-y-5 max-w-2xl">
          <h1 className='text-5xl lg:text-6xl text-purple-900 font-bold font-sans leading-tight'>Make Your Business Successful</h1>
          <p className='text-lg font-regular'>Eternatek Technologies Pvt Ltd is a leading IT solutions provider dedicated to transforming businesses through innovative technology and creative expertise. With a wide range of services including Website Development, App Development, Digital Marketing, SEO & SEM, Content Writing, Web Hosting, UI & UX Designing, Graphic Designing, Data Analysis, Business Analysis, and Marketing Research, we empower our clients to achieve their goals in an increasingly digital world. Our team of skilled professionals is committed to delivering high-quality, customized solutions that drive growth and success.</p>



          <div className="hero flex flex-col lg:flex-row justify-between items-center p-6 gap-10">
            <div className="content space-y-5 max-w-2xl">
              <h1 className='text-5xl lg:text-6xl text-purple-900 font-bold font-sans leading-tight'>Make Your Business Successful</h1>
              <p className='text-lg font-regular'>Eternatek Technologies Pvt Ltd is a leading IT solutions provider dedicated to transforming businesses through innovative technology and creative expertise. With a wide range of services including Website Development, App Development, Digital Marketing, SEO & SEM, Content Writing, Web Hosting, UI & UX Designing, Graphic Designing, Data Analysis, Business Analysis, and Marketing Research, we empower our clients to achieve their goals in an increasingly digital world. Our team of skilled professionals is committed to delivering high-quality, customized solutions that drive growth and success.</p>



              <Button variant={"mybtn"}>
                Explore More
              </Button>
            </div>
            <div className="img">
              <img
                src="https://img.freepik.com/premium-vector/designers-agency-flat-design-concept-illustration-people-characters_9209-5399.jpg?uid=R185271760&ga=GA1.1.2114736879.1740217972&semt=ais_hybrid&w=740"
                alt="Business Success"
                className='w-full max-w-8xl'
              />
            </div>
          </div>


          <div className="my-10 px-4">
            <p className="text-center text-4xl font-bold py-5">
              Accelerate Your Growth with Us
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {
                dataServices.map((item) => (
                  <div key={item.id} className="border p-5 rounded-xl shadow-md space-y-3 bg-gradient-to-l from-purple-600 to-purple-900 text-white transition-transform duration-300 hover:translate-y-1 cursor-pointer">
                    <div className="flex items-center gap-4">
                      {item.icon}
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="">
                      {item.description.length > 100
                        ? item.description.slice(0, 100) + "..."
                        : item.description}
                    </p>
                    <Button variant="outline">Know More</Button>
                  </div>
                ))
              }
            </div>
          </div>




          <div>
            <h1 className='flex justify-center items-center text-5xl font-bold font-sans p-12 text-black'>Our Solutions that Help you Grow</h1>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center"></div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
                  <Sparkles className="w-5 h-5 text-purple-700" />
                  <span className="text-purple-300 font-medium">Next-Gen Technology Solutions</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                  Innovating the
                  <span className="block bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
                    Digital Future
                  </span>
                </h1>


                <div className="flex flex-col sm:flex-row gap-4 pb-9 justify-center lg:justify-start">
                  <Button variant={"mybtn"}>
                    Get Started
                  </Button>

                  <Button variant={"mybtn"}>
                    Learn More
                  </Button>


                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                Innovating the
                <span className="block bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                At Eternatek, we craft cutting-edge technology solutions that transform businesses and shape tomorrow's digital landscape. Experience innovation without limits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pb-9 justify-center lg:justify-start">
                <Button variant="gradient2">
                  Get Started
                </Button>
                <Button variant="gradient2">
                  Learn More
                </Button>
              </div>
            </div>






            {/* <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-purple-900/30 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 p-6 rounded-xl border border-purple-700/30 hover:border-purple-600/50 transition-all duration-300 group">
                    <Code className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-semibold mb-2">Development</h3>
                    <p className="text-gray-400 text-sm">Custom software solutions</p>
                  </div>
                  <div className="mt-4 bg-slate-700/50 rounded-lg p-3">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Performance</span>
                      <span>98.7%</span>
                    </div>
                    <div className="bg-slate-600 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full w-[98.7%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}





          </div>



        </div>


        <section className='mt-3.5 pt-9'
        >
          <AccordionDemo />
        </section>
      </div>
    </div>
  )
}

export default Home
