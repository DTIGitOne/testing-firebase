import { useEffect, useState } from "react";
import Loader from "./Loader";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { fdb } from "../config";
import MediaCard from "./Card";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { axiosInstance } from "../Api/api";

const ItemsMain = () => {
   const [loading, setLoading] = useState(false);
   const [activities , setActivities] = useState([]);
   const [finalIndex , setFinalIndex] = useState(10);
   const [displActivities , setDisplayActivities] = useState([]);
   const [authors , setAuthors] = useState([]);
   const [displayBoth , setDisplayBoth] = useState([]);

   const getActivities = async () => {
      try {
         const {data} = await axiosInstance.get("Activities");

         setActivities(data);
      } catch (e) {
         console.log(e);
      }
   }

   const getAuthors = async () => {
      try {
         const { data } = await axiosInstance.get("Authors");

         setAuthors(data);
      } catch (e) {
         console.log(e);
      }
   }

   //initial load
   useEffect(() => {
      (async () => {
        await getActivities();
        await getAuthors();
      })();
    }, []);

   //show console
   useEffect(() => {
      setDisplayActivities(activities.slice(0 , finalIndex))
   }, [activities, finalIndex])

   //add both to array
   useEffect(() => {
   }, [authors]);

   //final index
   const addActivities = () => {
      setFinalIndex((prevState) => prevState + 10);

      if (finalIndex + 10 > activities.length) {
         setFinalIndex(activities.length);
      }

   }

   const removeActivities = () => {
      if (finalIndex >= 20) {
         setFinalIndex((prevState) => prevState - 10);
      } else {
      }
   }

   const deleteUser = async (prop) => {
      try {
         const { data } = await axiosInstance.delete("Activities/" + prop);

         await setActivities(activities.filter(item => item.id !== prop));

         setDisplayActivities(displActivities.filter(item => item.id !== prop));

         console.log("userdeleted");
      } catch (e) {
         console.log(e);
      }
   }
   
   const [cars , setCars] = useState ([]);

   const firebaseCars = [];

   useEffect(() => {
      (async () => {
         const querySnapshot = await getDocs( collection(fdb, "cars"));

         querySnapshot.forEach(item => {
            firebaseCars.push({
               id: item.id,
               ...item.data()
            });
         });
         setCars(firebaseCars);
      })();
   }, []);

   return (
      <div className=" flex-grow flex justify-center items-start">
         {cars.map(car => (
            <MediaCard key={car.id} brand={car.brand} model={car.model} price={car.price} year={car.year}/>
         ))}
         {loading ? <CircularProgress /> : null}

         <div className=" h-auto w-1/2 flex flex-col">
         {displActivities.map(act => (
           <div key={act.id}>
             <ul>
               {authors.map(aut => (
                 aut.id === act.id ? <MediaCard 
                 id={act.id}
                 brand={act.title} 
                 model={act.dueDate} 
                 price={act.completed}  
                 year={aut.firstName} 
                 userDelete={() => deleteUser(act.id)}
               /> : null
               ))}
             </ul>
           </div>
         ))}
         <div>{displActivities.length}</div>
           {loading ? <CircularProgress /> : null}
         </div>
         <span className=" flex gap-9">
           <button onClick={() => console.log(displActivities)}>console</button>
           <button onClick={addActivities}>add</button>
           <button onClick={removeActivities}>remove</button>
         </span>
      </div>
   );
}

export default ItemsMain;