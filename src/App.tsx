import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom'
import {
    Dashboard,
    Login,
    Error,
} from "./pages";
import DBInit from './pages/DBInit';
import { useAuthContext } from './contexts/auth_context';
import SingleUser from './pages/SingleUser';
import Adduser from './pages/Adduser';
import Alert from './components/Alert';



function App() {
  const{ auth } : any  = useAuthContext();
  return (
    <Router>
      <Alert />
      <Routes>
        <Route path='/'  element={auth.isLoggedin ? <Dashboard /> : <Navigate to='/login'></Navigate>}> </Route>
        <Route path='/dashboard'  element={auth.isLoggedin ? <Dashboard /> : <Navigate to='/login'></Navigate>}> </Route>
        <Route path='/users'  element={auth.isLoggedin ? <Adduser /> : <Navigate to='/login'></Navigate>}> </Route>
        <Route path='/users/:id'  element={auth.isLoggedin ? <SingleUser /> : <Navigate to='/login'></Navigate>}> </Route>
        <Route path='/login'  element={<Login />}> </Route>
        <Route path='/init'  element={<DBInit />}> </Route>
        <Route path='/*'  element={<Error />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
