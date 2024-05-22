import { Children } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {

   const user = localStorage.getItem("Token");
 
   if (!!user) return <Navigate to={"/Main"}/>
      

   return children;
}

export default PublicRoute;