import Footer from "../component/Footer";
import AddCar from "../component/AddCar";

const Add = () => {
   return (
      <div className=" h-full w-full flex flex-col">
       <AddCar />
       <Footer tittle="Main"/>
      </div>
   );
}

export default Add;