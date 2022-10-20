
import React , {useState} from 'react'

import {  FaUserLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../contexts/auth_context';
import { useUsersContext } from '../contexts/users_context';
import { api_url } from '../utils/constants';
import { addUser , createRandomUser } from '../utils/helpers';




function DBInit() {
    const {showAlert} = useAuthContext();
    const {fetchUsers} = useUsersContext();
    const [numUsers , setNumUsers] = useState(1);

    const handleSubmit = async (e : any) =>{
        e.preventDefault();
        Array.from({ length: numUsers }).forEach(async () => {
          await addUser(createRandomUser());
        });
        showAlert({msg:`Operation completed successfully`});
        fetchUsers(api_url);
    }

  return (
    <section className="bg-gray-100 min-h-screen">
        <div className="pt-[10%] mx-auto max-w-7xl items-center justify-center">
            <Link to="/"
                  className="flex items-center justify-center z-20"
            >
                <FaUserLock className='w-8 h-8 mr-2 text-amber-600'/>
                <span className="text-3xl font-bold uppercase">CRM</span>
            </Link>
            <div className="bg-white py-10 my-5 mx-auto rounded-lg border border-gray-300 w-11/12 md:w-1/2 ">
                <h1 className="mb-5 text-xl font-semibold text-left ml-2 text-gray-800 sm:text-center">
                    Set Random user Data
                </h1>
                <hr className='sm:w-1/2 w-1/3 sm:mx-auto mx-5' />
                <form className="py-6 space-y-4 " onSubmit={handleSubmit}>
                    <label className="block px-5">
                        <span className="block mb-1 text-base font-medium text-gray-700">count of users</span>
                        <input className="form-input w-10/12 mx-auto bg-gray-200 py-2 px-2 rounded"
                               type="number"
                               name='numUsers'
                               value={numUsers}
                               onChange={(e)=> {setNumUsers(parseInt(e.target.value))} }
                               placeholder="Ex. 1"
                               required />
                    </label>

                    <div className="flex items-center justify-between px-5">
                        <input type="submit" className="bg-amber-600 text-white py-2 px-5 text-lg font-bold rounded shadow-md border border-amber-900 mr-10 sm:mr-20 md:mr-28 hover:bg-amber-800" value="Create" />
                        <Link to="/dashboard"
                              className='py-2 px-5 rounded text-lg font-semibold hover:bg-amber-600'
                        >
                            Back
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default DBInit