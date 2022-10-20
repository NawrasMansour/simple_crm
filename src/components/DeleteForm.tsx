import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth_context';
import { useUsersContext } from '../contexts/users_context';
import { api_url } from '../utils/constants';
import { deleteUser } from '../utils/helpers';

function DeleteForm({userID} : any) {
    const {showAlert} = useAuthContext();
    const navigate = useNavigate();
    const {fetchUsers} = useUsersContext();

    const removeUser = async() => {
        const res = await deleteUser(userID );
        if(res.status === 'success'){
            showAlert({msg:`Operation completed successfully`});
            fetchUsers(api_url);
            navigate('/dashboard');
        }
        else
            alert(res.status)
    }

    return (
        <div className='p-4 items-center text-center max-w-3xl w-full mt-5 border rounded'>
            <FaTimesCircle className='text-red-600 w-20 h-20 mx-auto' />
            <p className='py-3 px-8 my-5 text-lg font-bold text-gray-800'>
                Do you want to Delete this user
            </p>
            <button
                onClick={removeUser}
                className='text-lg bg-red-600 text-white font-semibold rounded py-1 px-4 hover:shadow-xl'>
                Yes
            </button>
        </div>
    )
}

export default DeleteForm