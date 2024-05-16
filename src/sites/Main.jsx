import Footer from "../component/Footer";
import ItemsMain from "../component/ItemsMain";

const Main = () => {
   return (
      <div className=" h-full w-full flex flex-col">
       <ItemsMain />
       <Footer tittle="Add car"/>
      </div>
   );
}

export default Main;