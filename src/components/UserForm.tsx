import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/auth_context'

import { useUsersContext } from '../contexts/users_context'
import { api_url } from '../utils/constants'
import { addUser, updateUser } from '../utils/helpers'

function UserForm({userID , user ,source} : any) {
    const {showAlert} = useAuthContext();
    const navigate = useNavigate();
    const {fetchUsers} = useUsersContext();
    const [newUser , setNewUser] = useState({
        first_name : user.first_name ?? '',
        last_name : user.last_name ?? '',
        email : user.email ?? '',
        avatar : user.avatar ?? ''
    })

    const handleInput = (e : any) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setNewUser({...newUser,[name]: value});
    }

    const submit = async (e : any)=>{
        e.preventDefault();
        let res;
        if(source === "add"){
            res = await addUser(newUser);
        }

        if(source === "update"){
            res = await updateUser(userID ,newUser);
        }

        if(res.status === 'success'){
            showAlert({msg:`Operation completed successfully`});
            fetchUsers(api_url);
            navigate('/dashboard');
        }
        else
            alert(res.status)
    }

    return (
        <div className="w-full max-w-6xl mx-auto my-14 flex flex-col justify-center items-center p-5 rounded border border-gray-200 bg-white">
            <form onSubmit={submit} className="w-full mt-5">
                <div className='grid md:grid-cols-2'>
                    <div className='p-2'>
                        <label htmlFor="first_name" className="text-gray-900 font-medium">
                            First Name
                        </label>
                        <input
                            className='border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700 hover:border-gray-500 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non'
                            id="first_name"
                            name="first_name"
                            value={newUser.first_name}
                            onChange={handleInput}
                            type="text"
                            autoComplete="first name"
                            placeholder="First Name"
                        />
                    </div>
                    <div className='p-2'>
                        <label htmlFor="last_name" className="text-gray-900 font-medium">
                            Last Name
                        </label>
                        <input
                            className='border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700 hover:border-gray-500 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non'
                            id="last_name"
                            name="last_name"
                            value={newUser.last_name}
                            onChange={handleInput}
                            type="text"
                            autoComplete="last name"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <div className='grid md:grid-cols-2'>
                    <div className='p-2'>
                        <label htmlFor="email" className="text-gray-900 font-medium">
                            Email
                        </label>
                        <input
                            className='border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700 hover:border-gray-500 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non'
                            id="email"
                            name="email"
                            value={newUser.email}
                            onChange={handleInput}
                            type="text"
                            autoComplete="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className='p-2'>
                        <label htmlFor="avatar" className="text-gray-900 font-medium">
                            Avatar Link
                        </label>
                        <input
                            className='border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700 hover:border-gray-500 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non'
                            id="avatar"
                            name="avatar"
                            value={newUser.avatar}
                            onChange={handleInput}
                            type="text"
                            autoComplete="link"
                            placeholder="Avatar Link"
                        />
                    </div>
                </div>
                <div className='flex flex-row p-2'>
                    <button
                        className="mt-4 w-full bg-green-600 hover:bg-green-800 text-green-100 border py-3 px-6 font-semibold text-md rounded"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserForm