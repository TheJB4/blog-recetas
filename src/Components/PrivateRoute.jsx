import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    let isAuthenticated = null
    let user = JSON.parse(sessionStorage.getItem('user'))

    if(user?.admin){
        isAuthenticated = true
    }else{
        isAuthenticated = false
    }
    
    return isAuthenticated ? children : <Navigate to="/login" />;
  }