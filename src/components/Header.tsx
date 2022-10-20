import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import ProfileImg from '../assets/images/profile.jpg'
import {
    SearchIcon,
    MenuBtnIcon,
    BillIcon
} from '../components/svg'
import { useAuthContext } from '../contexts/auth_context'
import { useUsersContext } from '../contexts/users_context'



function Header() {
    const {authLogout} = useAuthContext();
    const{openSidebar} = useUsersContext();
    const [menu , setMenu] = useState(false);
    const [search , setSearch] = useState('');

    const handleSearch = (e : any) => {
        setSearch(e.target.value);
    }



    return (
        <header className="flex items-center justify-between w-full px-4 bg-white border-b h-14">
            <button onClick={openSidebar}
                    className="block btn btn-light md:hidden" >
                <span className="sr-only">Menu</span>
                <MenuBtnIcon />
            </button>
            <div className="hidden -ml-3 form-icon md:flex w-96">
                <SearchIcon />
                <input className="border-0 form-input justify-center py-2 pl-4 pr-16"
                        name='search'
                        value={search}
                        onChange={(e)=>handleSearch(e)}
                        placeholder="Search for articles..." />
            </div>
            <div className="flex items-center">
                <Link to="/dashboard" className="flex text-gray-500">
                    <BillIcon />
                </Link>
                <button type='button'
                        onClick={()=> {setMenu(!menu)}}
                        className="ml-4 avatar avatar-sm" id="menu-button" aria-expanded="true" aria-haspopup="true"
                >
                    <img className='w-10 h-10 rounded-full' src={ProfileImg} alt="profile" />
                </button>
                { menu &&
                    <div className="absolute right-3 top-11 z-30 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                        <div className="py-1" role="none">
                            <span
                                onClick={authLogout}
                                role="menuitem"  id="menu-item-0"
                                className='text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200'
                            >
                                Logout
                            </span>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header