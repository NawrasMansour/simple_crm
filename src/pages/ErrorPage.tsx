import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className='flex justify-center py-48 px-0 bg-gray-100 min-h-screen text-gray-600'>
      <div className='text-center capitalize'>
        <h1 className='mb-5 tracking-mainSpacing font-bold text-3xl'>
          oops! it's a dead end
        </h1>
        <Link to="/"
              className='uppercase tracking-mainSpacing text-amber-600 border-amber-600 hover:text-white hover:bg-amber-600 border-2 py-2 px-6 rounded inline-block transition-all ease-linear duration-300 cursor-pointer text-sm bg-transparent'>
          back home
        </Link>
      </div>
    </section>
  )
}

export default Error