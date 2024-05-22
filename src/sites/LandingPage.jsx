import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { useState } from 'react';
import { addDoc , collection } from 'firebase/firestore';
import { fdb } from '../config';
import { useNavigate } from 'react-router-dom';
import PublicRoute from '../Routes/PublicRoute';
import { getDocs } from 'firebase/firestore';

const LandingPage = () => {
   const [username , setUsername] = useState("");
   const [password, setPassword] = useState("");

   const [registerUsername , setRegisterUsername] = useState("");
   const [registerPassword , setRegisterPassword] = useState("");

   const [matchedUser, setMatchedUser] = useState(null);

   const navigate = useNavigate();

   const onFormRegisterSubmit = async (e) => {
      e.preventDefault();

      try {
         const user = {
            registerUsername,
            registerPassword
         };

         await addDoc(collection(fdb, "users"), user);

         localStorage.setItem("Token", JSON.stringify(user));

         navigate("/Main");
   
         setRegisterUsername("");
         setRegisterPassword("");
         
         
      } catch (e) {
         alert(e);
      }
   }

   const onFormLoginSubmit = async (e) => {
      e.preventDefault();

      try {
         const querySnapshot = await getDocs(collection(fdb, "users"));

         const usersList = querySnapshot.docs.map(doc => ({
           id: doc.id,
           ...doc.data()
         }));


         usersList.forEach(obj => {
            if (obj.registerUsername === username && obj.registerPassword === password) {

               const user = {
                  registerUsername: obj.registerUsername,
                  registerPassword: obj.registerPassword
               };

               localStorage.setItem("Token", JSON.stringify(user));
               navigate("/Main");
            } else {
               console.log("No user matched the value");
             }
          });

      } catch (e) {
         alert(e);
      }
   }

   return (
      <PublicRoute>
         <div className=" h-full w-full flex">
         <div className=" h-full w-1/2 flex justify-center items-center">
            <form onSubmit={onFormLoginSubmit} className=" h-1/2 w-1/2 border border-black rounded-3xl flex flex-col p-8 gap-6">
               <TextField value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
               <TextField value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' type='password'/>
               <Button onClick={onFormLoginSubmit} variant="contained">Log in</Button>
            </form>
         </div>
         <div className=" h-full w-1/2 flex justify-center items-center"> 
         <form onSubmit={onFormRegisterSubmit} className=" h-1/2 w-1/2 border border-black rounded-3xl flex flex-col p-8 gap-6">
               <TextField value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} placeholder='username'/>
               <TextField value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} placeholder='password' type='password'/>
               <Button onClick={onFormRegisterSubmit} variant="contained">Sign up</Button>
            </form>
         </div>
      </div>
      </PublicRoute>
   );
}

export default LandingPage;