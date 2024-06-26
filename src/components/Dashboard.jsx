import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const { arr } = useSelector((state) => state.array);
  
  return (
    <div className=' max-w-max border-b px-1 flex items-end justify-start overflow-x-auto custom-scrollbar'>
      {/* <div className='w-2 border-b'></div> */}
      {
        arr.map((ele, idx) => (
          <div
            key={idx}
            className='flex w-4 flex-col justify-center items-center min-w-3'
          >
            <p className='text-[8px]'>
              {ele}
            </p>
            <div
              className={`w-9/12 h-[${ele*100}px] border border-amber-500 bg-rose-400 flex items-start justify-center transition-all duration-500 ease-in-out`}
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