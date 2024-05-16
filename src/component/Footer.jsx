import { useNavigate } from "react-router-dom";

const Footer = ( props ) => {
   
   const navigate = useNavigate();

   const locateFunction = () => {
      if (props.tittle === "Main") {
         navigate("/Main")
      } else if (props.tittle === "Add car") {
         navigate("/Add")
      }
   }

   return (
      <div className=" h-40 w-full bg-slate-200 relative bottom-0 flex justify-end flex-col items-center p-5 gap-4">
         <button className=" p-6 text-2xl bg-black rounded-3xl text-white" onClick={locateFunction}>{props.tittle}</button>
         Cars Display App
      </div>
   );
}

export default Footer;