import React from 'react'
import { Button } from '../components/ui/button'
import AccordionDemo from './services/AccordionDemo'
import { CircleChevronDown, Database, Mic, PieChart, BrainCircuit, AppWindow } from 'lucide-react'

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

      
      <section>
        <AccordionDemo />
      </section>
    </div>
  )
}

export default Home
