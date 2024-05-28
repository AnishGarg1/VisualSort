import React from 'react'

const Dashboard = ({array}) => {
  return (
    <div className='flex'>
      {
        array.map((ele, idx) => (
          <div
            key={idx}
            className={`w-4 h-[${ele*100}px] border border-amber-500 bg-rose-400`}
            style={{height:`${ele*100}px`}}
          >
            ele
          </div>
        ))
      }
    </div>
  )
}

export default Dashboard