import React , {useEffect , useState} from 'react'
import { FaUserTag, FaMailBulk, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteForm from '../components/DeleteForm';
import Header from '../components/Header'
import Loading from '../components/Loading';
import Sidebar from '../components/Sidebar'
import UserForm from '../components/UserForm';
import { useUsersContext } from '../contexts/users_context';
import { api_url } from '../utils/constants';
import Error from './ErrorPage';


function SingleUser() {
    const [isModalOpen , setModal] = useState({type: '' , status:false});
    const {id} = useParams();
    const navigate = useNavigate();
    const{  single_user_loading:loading,
            single_user_error:error,
            single_user: user= {},
            fetchsingleUser} = useUsersContext();

    const openModal = (e : any, type : string) => {
        setModal({...isModalOpen, status : true , type : type })
    }
    const closeModal = () => {
        setModal({...isModalOpen, status : false})
    }

    useEffect( ()=>{
        fetchsingleUser(`${api_url}/${id}`)
    } , [id] )

    useEffect( ()=>{
        if(error){
        setTimeout(() => {
            navigate('/');
        }, 3000);
        }
    } , [error] )

    if(loading){
        return <Loading />
    }

    if(error){
        return <Error />
    }

    const { first_name,
          last_name,
          email,
          avatar} : any = user

    return (
        <>
            <section className="min-h-screen bg-gray-50">
                <Sidebar />
                <div className="ml-0 transition md:ml-60">
                    <Header />
                    <div className="p-4"> {/* Add content here, remove div below */}
                        <div className='py-8 px-0 w-[90vm] mx-auto max-w-[1170px] grid gap-4 grid-cols-12'>
                            <img src={avatar}
                                    alt={first_name}
                                    className="object-cover rounded bg-black sm:col-span-5 w-full col-span-12"
                                />
                            <div className='px-4 mx-auto sm:mx-4 text-left text-gray-700 sm:col-span-7' >
                                <h1 className='flex text-2xl font-bold p-4 mb-4'>
                                    <FaUserTag className='mr-1' />
                                    {first_name} {last_name}
                                </h1>
                                <h3 className='flex text-xl font-semibold p-4 mb-4'>
                                    <FaMailBulk className='mr-1' />
                                    {email}
                                </h3>
                                <div className='p-4 flex'>
                                    <button onClick={(e) => openModal( e,"edit")}
                                            className='flex items-center text-blue-500 border border-blue-500 rounded p-2 m-1 text-lg hover:bg-blue-500 hover:text-white'>
                                        <FaEdit className='mr-1'/>
                                        Edit
                                    </button>
                                    <button onClick={(e) => openModal( e,"delete")}
                                            className='flex items-center text-red-600 border border-red-600 rounded p-2 m-1 text-lg hover:bg-red-600 hover:text-white'>
                                        <FaTrash className='mr-1' />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {isModalOpen.status &&
                <div
                    className="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8 mx-auto transition duration-300">

                        <div className="p-4 bg-white self-start mt-32 max-w-screen-md rounded z-40 transition duration-300">
                            <h1 className='p-2 text-xl font-bold'>
                                {first_name} {last_name}
                            </h1>
                            { isModalOpen.type === "edit" ?
                                <UserForm userID={id} user={user} source={'update'} /> :
                                <DeleteForm userID={id} />
                            }

                            <button onClick={closeModal}
                                    className="text-white mt-8 bg-amber-600 py-2 px-6 rounded transition duration-300 hover:shadow-md hover:-translate-y-1">
                                Close
                            </button>
                        </div>

                </div>
            }
        </>

    )
}

export default SingleUser