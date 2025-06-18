import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import  Greeting  from './components/ui/Greeting'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  

      <h1 className="bg-amber-100 text-4xl font-bold p-4">
        I am DIVYA Ragipani, Lets create a New Project based on React, Tailwind, Shadcn.
      </h1>
      

     <div className='flex items-center justify-center gap-6 p-10'>
       <Button variant={"custom"} className={"flex items-center gap-4 justify-center"}>
        Click on
      </Button>
     </div>


     <div>
      <Greeting name = "Alice"/>
     </div>

      
    </>
  )
}

export default App;
