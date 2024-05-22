import PrivateRoute from "../Routes/PrivateRoute";
import Footer from "../component/Footer";
import ItemsMain from "../component/ItemsMain";
import LogOut from "../component/LogOut";

const Main = () => {
   return (
     <PrivateRoute>
        <div className=" h-full w-full flex flex-col">
        <ItemsMain />
        <Footer tittle="Add car"/>
       </div>
       <LogOut />
     </PrivateRoute>
   );
}

export default Main;