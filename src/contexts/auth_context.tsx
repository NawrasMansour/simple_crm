import React, { useContext , useState } from 'react';
import { getLocalStorage } from '../utils/helpers';

const initialContext = {
  auth : getLocalStorage(),
  authLogin : (() => {}) as any,
  authLogout : (() => {}) as any,
  alert : {show:false,msg:"",type:"success"},
  showAlert : (() => {}) as any,
  hideAlert : (() => {}) as any,
}

const AuthContext = React.createContext(initialContext)
export const AuthProvider = ({ children }: any ) => {
  const [auth ,setAuth] : any= useState(getLocalStorage());
  const [alert,setAlert] = useState({show:false,msg:"",type:"success"});

  const authLogin = (auth : any) => {
    setAuth(auth);
    localStorage.setItem('auth',JSON.stringify(auth));
  }

  const authLogout = () => {
    setAuth({email: "" , isLoggedin : false});
    localStorage.removeItem('auth');
  }

  const showAlert = ({msg,type="success"}:any) => {
    setAlert({show:true,msg,type})
  }

  const hideAlert = () => {
    setAlert({...alert,show:false})
  }

  return (
    <AuthContext.Provider value={{auth,authLogin,authLogout,alert,showAlert,hideAlert}}>{children}</AuthContext.Provider>
  )
}
// make sure use
export const useAuthContext = () => {
  return useContext(AuthContext)
}
