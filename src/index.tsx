import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './contexts/auth_context';
import { UsersProvider } from './contexts/users_context';
import { PaginationProvider } from './contexts/pagination_context';
import { makeServer } from "./api/server.js"


makeServer({ environment: "development" });



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UsersProvider>
        <PaginationProvider>
          <App />
        </PaginationProvider>
      </UsersProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
