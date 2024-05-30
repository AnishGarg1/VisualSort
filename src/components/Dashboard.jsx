import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const { arr } = useSelector((state) => state.array);
  
  return (
    <div className='flex gap-1 border-2 items-end'>
      {
        arr.map((ele, idx) => (
          <div
            key={idx}
            className='flex flex-col justify-center items-center'
          >
            <p className='text-xs'>
              {ele}
            </p>
            <div
              className={`w-4 h-[${ele*100}px] border border-amber-500 bg-rose-400 flex items-start justify-center transition-all duration-500 ease-in-out`}
              style={{height:`${ele*4}px`}}
            >
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Dashboard