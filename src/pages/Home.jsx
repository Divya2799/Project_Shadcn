import React from 'react'
import { Button } from '../components/ui/button'
import AccordionDemo from './services/AccordionDemo'

const Home = () => {
  return (
    <div>
      <div className="hero flex justify-between">
        <div className="content space-y-5">
          <h1 className='text-7xl'>Make Your BusinessSuccessful</h1>
          <p className='w-[80%]'>Lorem ipsum wdolor sit amet consectetur adipisicing elit. Architecto, accusantium. Quisquam, labore, rem corporis voluptas obcaecati tenetur iste facere necessitatibus officiis sapiente quos itaque hic, incidunt sint veniam deleniti doloremque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vel nostrum voluptas quidem cum molestias assumenda laboriosam, hic possimus delectus tenetur asperiores ipsam quos unde quia, quis optio, facilis iure?</p>
          <Button variant="outline">Explore More</Button>
        </div>
        <div className="img">
          <img src="https://img.freepik.com/premium-vector/designers-agency-flat-design-concept-illustration-people-characters_9209-5399.jpg?uid=R185271760&ga=GA1.1.2114736879.1740217972&semt=ais_hybrid&w=740" alt="" className='w-7xl' />
        </div>
      </div>
       <section>
        <AccordionDemo />
      </section>
    </div>
  )
   
}

export default Home
