import Footer from "../component/Footer";
import Top from "../component/Top";

const Main = () => {
   return (
      <div className=" h-full w-full flex flex-col">
       <Top />
       <Footer tittle="Add car"/>
      </div>
   );
}

export default Main;