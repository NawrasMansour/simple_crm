import React from 'react'

import { FaUserPlus , FaUserMinus } from 'react-icons/fa'
import StateCard from './StateCard'

function Statistics({customUserAmount} :any ) {
  return (
    <div className='flex flex-col sm:flex-row items-center text-start md:text-center justify-between my-5'>
        <StateCard title={"Auth Users"} amount={1} Icon={FaUserPlus}/>
        <StateCard title={"Custom Users"} amount={customUserAmount} Icon={FaUserMinus}/>
    </div>
  )
}

export default Statistics