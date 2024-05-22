import { Children } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

   const user = localStorage.getItem("Token");
 
   if (!user) return <Navigate to={"/Login"}/>
      

   return children;
}

export default PrivateRoute;