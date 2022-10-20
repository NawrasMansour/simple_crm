import React from 'react'
import { FaPlusCircle , FaTrash } from 'react-icons/fa'
import { useUsersContext } from '../contexts/users_context';
import { Link } from 'react-router-dom'

function ActionBtnsUser() {
    const {deleted_users , handleDeletedUsers} = useUsersContext();
  return (
    <div className='flex flex-col sm:flex-row'>
        {deleted_users.length > 0 &&
            <button
                onClick={handleDeletedUsers}
                className='flex justify-center items-center bg-red-600 text-white mr-1 mb-1 py-2 px-5 text-lg font-bold rounded shadow-md border border-red-500 hover:bg-red-700'
            >
                <FaTrash className='mr-1' />
                Delete Users
            </button>
        }

        <Link to="/users"
            className='flex justify-center items-center bg-amber-500 text-white mb-1 py-2 px-5 text-lg font-bold rounded shadow-md border border-amber-500 hover:bg-amber-700'
        >
            <FaPlusCircle className='mr-1' />
            Add User
        </Link>
    </div>
  )
}

export default ActionBtnsUser