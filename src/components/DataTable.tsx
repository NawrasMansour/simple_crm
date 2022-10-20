import React from 'react'
import { Link } from 'react-router-dom'
import { usePaginationContext } from '../contexts/pagination_context';
import { useUsersContext } from '../contexts/users_context';

function DataTable() {
    const {filtered_users:users } = usePaginationContext();
    const {checkDeletedUsers} = useUsersContext();
  return (
    <table className="min-w-max table-auto w-full mx-auto">
        <thead>
            <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Fullname</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Email</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                <th className="px-6 py-3 border-b-2 border-gray-300"></th>
            </tr>
        </thead>
        <tbody className="bg-white">
            {users.map( (user : any)=> {
                return (
                    <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                            <input type="checkbox" className="w-5 h-5" onChange={checkDeletedUsers} value={user.id}
                                    />
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                            <div className="flex items-center text-base leading-5 text-blue-900">
                                <img
                                    className="h-8 w-8 rounded-full object-cover mr-1"
                                    src={user.avatar}
                                    alt=""
                                />
                                {user.first_name} {user.last_name}
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{user.email}</td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                <span className="relative text-xs">active</span>
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                            <Link to={`/users/${user.id}`} className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</Link>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
  )
}

export default DataTable