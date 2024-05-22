import Footer from "../component/Footer";
import AddCar from "../component/AddCar";
import PrivateRoute from "../Routes/PrivateRoute";
import LogOut from "../component/LogOut";

const Add = () => {
   return (
      <PrivateRoute>
         <div className=" h-full w-full flex flex-col">
          <AddCar />
          <Footer tittle="Main"/>
         </div>
         <LogOut/>
      </PrivateRoute>
   );
}

export default Add;