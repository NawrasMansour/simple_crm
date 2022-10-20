import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import {  FaUserLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../contexts/auth_context';
import {  auth_url } from '../utils/constants';



function Login() {
    const navigate = useNavigate();
    const {authLogin,alert,showAlert} = useAuthContext();
    const [user , setUser] = useState({email: '' , password: ''});

    const handleInput = (e : any) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setUser({...user,[name]:value});
    }

    const handleSubmit = async (e : any) => {
        showAlert({msg:"accessing user data. please wait ..."})
        e.preventDefault();
        try {
            const url = auth_url+'/'+user.email+'/'+user.password;
            const response = await axios.get(url);
            if(response.data.admins.length > 0){
                const email = response.data.admins[0].email;
                const auth = {email,isLoggedin : true};
                authLogin(auth);
                showAlert({msg:`you are logged in : ${auth.email}. go away`});
                navigate('/dashboard');
            }else{
                showAlert(
                    {msg:`there was an error. please try again.` , type:"danger"}
                )
            }
        } catch (err) {
            showAlert(
                {msg:`there was an error. please try again...` , type:"danger"}
            )
        }
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
                    Log in to your account
                </h1>
                <hr className='sm:w-1/2 w-1/3 sm:mx-auto mx-5' />
                <form className="py-6 space-y-4 " onSubmit={handleSubmit}>
                    <label className="block px-5">
                        <span className="block mb-1 text-base font-medium text-gray-700">Your Email</span>
                        <input className="form-input w-10/12 mx-auto bg-gray-200 py-2 px-2 rounded"
                               type="email"
                               name='email'
                               value={user.email}
                               onChange={(e)=> handleInput(e)}
                               placeholder="Ex. james@bond.com"
                               required />
                    </label>
                    <label className="block px-5">
                        <span className="block mb-1 text-base font-medium text-gray-700">Your Password</span>
                        <input className="form-input w-10/12 mx-auto bg-gray-200 py-2 px-2 rounded"
                               type="password"
                               name='password'
                               value={user.password}
                               onChange={(e)=> handleInput(e)}
                               placeholder="••••••••"
                               required />
                    </label>
                    <div className="flex items-center justify-between px-5">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">Remember me</span>
                        </label>
                        <input type="submit" className="bg-amber-600 text-white py-2 px-5 text-lg font-bold rounded shadow-md border border-amber-900 mr-10 sm:mr-20 md:mr-28 hover:bg-amber-800" value="Login" />
                    </div>
                </form>
            </div>
            <p className="flex justify-between max-w-xl mx-auto p-2 text-base text-amber-500 font-semibold">
                <Link to="/" className="hover:bg-gray-300 rounded p-2">Forgot password</Link>
                <Link to="/" className="hover:bg-gray-300 rounded p-2">Create an account</Link>
            </p>
        </div>

    </section>
  )
}

export default Login