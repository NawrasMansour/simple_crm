import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/users_reducer'
import { api_url as url } from '../utils/constants'
import { deleteUser } from '../utils/helpers'
import { useAuthContext } from './auth_context'


const initialContext = {
  isSidebarOpen : false,
  openSidebar : (() => {}) as any,
  closeSidebar : (() => {}) as any,
  users_loading : false,
  users_error : false,
  users : [],
  deleted_users: [],
  checkDeletedUsers : (() => {}) as any,
  handleDeletedUsers : (() => {}) as any,
  fetchUsers : (() => {}) as any,
  single_user_loading : false,
  single_user_error : false,
  single_user : {},
  fetchsingleUser : (() => {}) as any,
}


const UesrsContext = React.createContext(initialContext)

export const UsersProvider = ({ children } : any) => {
  const {showAlert} = useAuthContext();
  const [state, dispatch] = useReducer(reducer, initialContext);

  const openSidebar = ()=>{
    dispatch({ type: "SIDEBAR_OPEN" })
  }

  const closeSidebar = () => {
    dispatch({ type: "SIDEBAR_CLOSE" })
  }

  const fetchUsers = async(url : any) => {
    dispatch({ type: "GET_USERS_BEGIN" })
    try {
      const response = await axios.get(url);
      const users = response.data.users;
      dispatch({ type: "GET_USERS_SUCCESS",payload: users })
    } catch (error) {
      dispatch({ type: "GET_USERS_ERROR" })
    }
  }

  const fetchsingleUser = async(url : any) => {
    dispatch({ type: "GET_SINGLE_USER_BEGIN" })
    try {
      const response = await axios.get(url);
      const singleUser = response.data.user;
      dispatch({ type: "GET_SINGLE_USER_SUCCESS",payload: singleUser })
    } catch (error) {
      dispatch({ type: "GET_SINGLE_USER_ERROR" })
    }
  }

  const checkDeletedUsers = (e:any) => {
    const checkboxValue = e.currentTarget.value;
    const checkboxState = e.currentTarget.checked;
    dispatch({type:"CHECK_DELETED_USERS" , payload : { checkboxValue , checkboxState } });
  }

  const handleDeletedUsers = async () => {
    let res;
    state.deleted_users.map( async (userID : '') => {
      res = await deleteUser(userID);
      return;
    })
    showAlert({msg:`Operation completed successfully`});
    dispatch({type:"CLEAR_DELETED_USERS_LIST" });

  }

  useEffect( ()=>{
    fetchUsers(url);
  },[state.deleted_users])


  return (
    <UesrsContext.Provider value={{...state,openSidebar,closeSidebar,checkDeletedUsers,handleDeletedUsers,fetchsingleUser , fetchUsers}}>
      {children}
    </UesrsContext.Provider>
  )
}
// make sure use
export const useUsersContext = () => {
  return useContext(UesrsContext)
}
