import React from 'react'

import ActionBtnsUser from './ActionBtnsUser'
import DataTable from './DataTable'
import Pagination from './Pagination'

function UsersList({users}:any) {
  return (
    <div className="p-4 mx-2 bg-white rounded border botder-gray-300">
        <div className='flex justify-between'>
            <h1 className='p-2 text-3xl font-bold border-b-2'>
                Users List
            </h1>
            <ActionBtnsUser />
        </div>
        <div className="align-middle inline-block w-full lg:overflow-x-hidden overflow-x-scroll bg-transparent px-8 pt-3 my-5">
            <DataTable />
            <Pagination />
        </div>
    </div>
  )
}

export default UsersList