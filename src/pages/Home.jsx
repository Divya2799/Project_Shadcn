import React from 'react'
import { Button } from '../components/ui/button'
import AccordionDemo from './services/AccordionDemo'
import { CircleChevronDown, Database, Mic, PieChart, BrainCircuit, AppWindow } from 'lucide-react'
import { ArrowRight, Code, Cpu, Sparkles } from 'lucide-react'

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

      <div className="hero flex flex-col lg:flex-row justify-between items-center p-6 gap-10">
        <div className="content space-y-5 max-w-2xl">
          <h1 className='text-5xl lg:text-6xl text-purple-900 font-bold font-sans leading-tight'>Make Your Business Successful</h1>
          <p className='text-lg font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, accusantium. Quisquam, labore, rem corporis voluptas obcaecati tenetur iste facere necessitatibus officiis sapiente quos itaque hic, incidunt sint veniam deleniti doloremque.</p>
          <p className='text-lg font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vel nostrum voluptas quidem cum molestias assumenda laboriosam, hic possimus delectus tenetur asperiores ipsam quos unde quia, quis optio, facilis iure?</p>
          <Button className="bg-gradient-to-r from-purple-600 to-black text-white px-5 py-2 rounded-lg font-semibold shadow-lg transform scale-105 border border-purple-500 transition-all duration-300 hover:text-black hover:bg-white">
            Explore More
          </Button>
        </div>
        <div className="img">
          <img
            src="https://img.freepik.com/premium-vector/designers-agency-flat-design-concept-illustration-people-characters_9209-5399.jpg?uid=R185271760&ga=GA1.1.2114736879.1740217972&semt=ais_hybrid&w=740"
            alt="Business Success"
            className='w-full max-w-xl'
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
              <div key={item.id} className="border p-5 rounded-xl shadow-md space-y-3 bg-gradient-to-r from-slate-500 to-slate-800 text-white transition-transform duration-300 hover:translate-y-1 cursor-pointer">
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


      
        <div className="hero flex justify-between container">
          <div className=" p-5 flex justify-center items-start gap-10 flex-col content space-y-5">

            <h1 className=' flex w-2xl text-6xl text-purple-900 font-extrabold font-sans  '>Make Your Business  Successful</h1>
            {/* <p className='w-1xl text-1xl font-light'>Lorem ipsum wdolor sit amet consectetur adipisicing elit. Architecto, accusantium. Quisquam, labore, rem corporis voluptas obcaecati tenetur iste facere necessitatibus officiis sapiente quos itaque hic, incidunt sint veniam deleniti doloremque.</p>
          <p className='w-1xl text-1xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vel nostrum voluptas quidem cum molestias assumenda laboriosam, hic possimus delectus tenetur asperiores ipsam quos unde quia, quis optio, facilis iure?</p> */}
            <Button className="bg-gradient-to-r from-purple-600 to-black text-white  px-8 py-5 rounded-lg font-semibold shadow-lg transform scale-105 border border-purple-500 transition-all duration-ease-in-out
           hover:text-black cursor-pointer hover:bg-white">Explore More</Button>


          </div>
          <div className="img">
            <img src="https://img.freepik.com/premium-vector/designers-agency-flat-design-concept-illustration-people-characters_9209-5399.jpg?uid=R185271760&ga=GA1.1.2114736879.1740217972&semt=ais_hybrid&w=740" alt="" className='max-w-3xl' />
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

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                At Eternatek, we craft cutting-edge technology solutions that transform businesses and shape tomorrow's digital landscape. Experience innovation without limits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pb-9 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-purple-900 to-grey text-white px-8 py-4 rounded-lg font-semibold shadow-lg transform scale-105 border border-purple-700 transition-all duration-ease-in-out
           hover:text-black cursor-pointer hover:bg-white">
                  Get Started

                </button>

                <button className="bg-gradient-to-r from-purple-900 to-grey text-white px-8 py-4 rounded-lg font-semibold shadow-lg transform scale-105 border border-purple-700 transition-all duration-ease-in-out
           hover:text-black cursor-pointer hover:bg-white">
                  Learn More
                </button>
              </div>
            </div>


            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-purple-900/30 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 p-6 rounded-xl border border-purple-700/30 hover:border-purple-600/50 transition-all duration-300 group">
                    <Code className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-semibold mb-2">Development</h3>
                    <p className="text-gray-400 text-sm">Custom software solutions</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 p-6 rounded-xl border border-purple-700/30 hover:border-purple-600/50 transition-all duration-300 group">
                    <Cpu className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-semibold mb-2">AI & ML</h3>
                    <p className="text-gray-400 text-sm">Intelligent automation</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 p-6 rounded-xl border border-purple-700/30 hover:border-purple-600/50 transition-all duration-300 group col-span-2">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">System Status: Optimal</span>
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
              </div>
            </div>





          </div>

        </div>
        <section className='mt-3.5 pt-9'
        >
          <AccordionDemo />
        </section>
    </div>
  )
}

export default Home
