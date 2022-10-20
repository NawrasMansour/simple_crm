
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/pagination_reducer'
import { useUsersContext } from './users_context'


const initialContext = {
  users : [],
  filtered_users : [],
  currentPage : 1,
  totalPages: 1,
  countInPage: 5,
  first : 1,
  changePage : (() => {}) as any,
}


const PaginationContext = React.createContext(initialContext)

export const PaginationProvider = ({ children } : any) => {
  const {users} = useUsersContext();
  const [state, dispatch] = useReducer(reducer, initialContext);


  useEffect(()=>{
    dispatch({type:"LOAD_USERS" , payload : users})
  },[users])

  useEffect(()=>{
    dispatch({type:"FILTER_USERS"})
  },[users,state.currentPage,state.countInPage])

  const changePage = (e : any) => {
    let name = e.currentTarget.name;
    let value = parseInt(e.currentTarget.value);

    dispatch({type:"UPDATE_PAGE" , payload : {name ,value}});
  }

  return (
    <PaginationContext.Provider value={{...state,changePage}}>
      {children}
    </PaginationContext.Provider>
  )
}
// make sure use
export const usePaginationContext = () => {
  return useContext(PaginationContext)
}
