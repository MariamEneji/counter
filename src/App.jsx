import { useState } from 'react'
import { ChevronDown, ChevronsDown, Hash, ChevronUp, ChevronsUp, RotateCcw } from 'react-feather'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleUpOne = () => {
    setCount(count + 1);
  }

  const handleUpTen = () => {
    setCount(count + 10);
  }

  const handleReset = () => {
    setCount(0)
  }

  const handleRandom = () => {
    setCount(Math.floor(Math.random() * 100) + 1)
  }

  const handleDownOne = () => {
    setCount(count - 1);
  }

  const handleDownTen = () => {
    setCount(count - 10);
  }


  return (
    
      <div className='h-screen w-screen  flex justify-center items-center bg-[#e6daeb]'>

        <div className='h-[400px] w-3/4 md:w-1/2 shadow-indigo-800 shadow-2xl rounded-3xl flex justify-center flex-col items-center p-2 bg-slate-50 '> 
        <p className='p-8 text-xl'>Current Value:</p> 
        <h1 className='text-4xl font-bold'>{count}</h1>

        <div className='py-16 flex items-center justify-between gap-4 md:gap-8 '>
          <button onClick={handleUpOne} className='border-2 p-2 bg-[#f1ebeb]'><ChevronUp/></button>
          <button onClick={handleUpTen} className='border-2 p-2 bg-[#f1ebeb]'><ChevronsUp/></button>
          <button onClick={handleReset} className='border-2 p-2 bg-[#f1ebeb]'><RotateCcw/></button>
          <button onClick={handleRandom} className='border-2 p-2 bg-[#f1ebeb]'><Hash/></button>
          <button onClick={handleDownTen} className='border-2 p-2 bg-[#f1ebeb]'><ChevronsDown/></button>
          <button onClick={handleDownOne} className='border-2 p-2 bg-[#f1ebeb]'><ChevronDown/></button>
        </div>


        
        </div>

        



      </div>
    
  )
}

export default App
