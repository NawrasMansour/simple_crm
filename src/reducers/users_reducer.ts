
const users_reducer = (state : any , action : any) => {

  switch (action.type) {
    case "SIDEBAR_OPEN":
      return {...state, isSidebarOpen :true}
    case "SIDEBAR_CLOSE":
      return { ...state, isSidebarOpen: false }
    //users
    case "GET_USERS_BEGIN":
      return { ...state, users_loading: true }
    case "GET_USERS_SUCCESS":
      return { ...state, users_loading: false, users: action.payload}
    case "GET_USERS_ERROR":
      return { ...state, users_loading: false ,users_error: true }
    case "CHECK_DELETED_USERS":
        const {checkboxValue,checkboxState} = action.payload;
        if(checkboxState)
            return {...state , deleted_users : [...state.deleted_users , checkboxValue]};
        const deketedUsersTemp = state.deleted_users.filter( (userID : '')=> userID !== checkboxValue);
        return {...state , deleted_users : deketedUsersTemp}
    case "CLEAR_DELETED_USERS_LIST":
        return {...state , deleted_users : []}
    //single user
    case "GET_SINGLE_USER_BEGIN":
      return { ...state, single_user_loading: true ,single_user_error: false}
    case "GET_SINGLE_USER_SUCCESS":
      return { ...state, single_user_loading: false, single_user : action.payload}
    case "GET_SINGLE_USER_ERROR":
      return { ...state, single_user_loading: false ,single_user_error: true }


    default:
      return state;
  }
}

export default users_reducer
