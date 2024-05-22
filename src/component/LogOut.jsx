import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {

   const navigate = useNavigate();

   const deleteToken = () => {

      const user = localStorage.getItem("Token");

      if (user) {
        localStorage.removeItem("Token");
        navigate("/LogIn");
      } else {
         alert("something went wrong");
      }
   }

   return (
      <div className=" fixed bottom-0 right-0 w-40 h-40 flex justify-center items-center">
         <Button onClick={deleteToken} variant='contained'>Log out</Button>
      </div>
   );
}

export default LogOut;