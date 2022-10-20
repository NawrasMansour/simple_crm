import { calculatePagination } from "../utils/helpers"

const pagination_reducer = (state : any , action : any) => {

  switch (action.type) {
    // users
    case "LOAD_USERS":
        return { ...state ,
                 users : action.payload,
                 filtered_users : action.payload
               }
    // pagination
    case "FILTER_USERS":
      const {users , countInPage,currentPage} = state;
      const paginationStateTemp = calculatePagination(users,countInPage,currentPage);
      return { ...state,
               filtered_users : paginationStateTemp.filteredItems,
               totalPages : paginationStateTemp.totalPages,
               countInPage: paginationStateTemp.countInPage,
               first: paginationStateTemp.first,
             }
    case "UPDATE_PAGE" :
        const {name,value} = action.payload;
        return {...state , [name] : value}
    default:
      return state;
  }
}

export default pagination_reducer
