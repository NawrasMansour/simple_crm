import React from 'react'

function StateCard({title , amount , Icon} : any) {
  return (
    <div className='bg-white z-10 border border-gray-300 px-4 py-10 mx-2 mb-2 rounded w-full hover:shadow-md'>
        <h2 className='text-gray-700 font-bold text-xl flex md:justify-center justify-start'>
            <Icon className='mr-1 w-6 h-6 text-amber-600'/>
            {title}
        </h2>
        <span className='text-gray-500 font-semibold text-lg'>{amount} users</span>
    </div>
  )
}

export default StateCard