import React from 'react'
import loading from '../assets/images/loading.gif'

const Loading = () => {
  return (
    <div className='capitalize text-center text-3xl mt-12 tracking-mainSpacing'>
      <h2 className='mb-5 tracking-mainSpacing font-semibold'>
        loading...
      </h2>
      <img className='w-40 my-0 mx-auto' src={loading} alt="loading gif" />
    </div>
  )
}

export default Loading
