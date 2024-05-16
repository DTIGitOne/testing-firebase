import { useEffect, useState } from "react";
import Loader from "./Loader";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { fdb } from "../config";
import MediaCard from "./Card";

const ItemsMain = () => {
   
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
      <div className=" flex-grow flex justify-center items-center">
         {cars.map(car => (
            <MediaCard key={car.id} brand={car.brand} model={car.model} price={car.price} year={car.year}/>
         ))}
      </div>
   );
}

export default ItemsMain;