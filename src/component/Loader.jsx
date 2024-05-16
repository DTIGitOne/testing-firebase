import { useEffect, useState } from "react";

const Loader = ({ load }) => {
   const [open , setOpen] = useState(false);

   useEffect(() => {
      setOpen(load);
      console.log(open);
   }, [load]);

   return (
      (
         open ? (
            <div className=" h-screen w-screen flex justify-center items-center z-50 fixed backdropLoad">
               <span id="loader"></span>
            </div>
         ) : null
      )
   );
}

export default Loader;