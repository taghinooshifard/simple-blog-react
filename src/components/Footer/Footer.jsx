import ReactLogo from './../../assets/react.svg'
import { BsAt,BsGlobe2 } from "react-icons/bs";
import MenuList from '../Header/Menu/MenuList';
import Contact from './Contact';

function Footer() {
  return (
    <footer className="flex flex-col justify-center pt-3">
        <div className="grid grid-cols-12 h-full w-full  px-5 ">
        <div className="col-span-4 max-sm:col-span-12 flex flex-col items-center">
         <div className=" flex justify-center items-center gap-1">
          <img src={ReactLogo} className="w-12 h-12 hover:w-14 hover:h-14" alt="React Logo" />
          <p className="text-2xl">React Roocket Blog</p>
         </div>
         <p>This site created in second </p>
         <p>roocket react bootcamp</p>
        </div>
        
        <div className="col-span-4 max-sm:col-span-12 max-sm:hidden">
            <MenuList iscol={true}/>
        </div>

        <Contact/>

        
        </div>
         <hr className="opacity-20"/>
      <div className="flex max-sm:flex-col  w-full justify-center items-center flex-row">
        <p className="flex  items-center gap-1 ">
          <BsGlobe2 />This site powerd by React<img src={ReactLogo} className="w-5 h-5 " alt="React Logo" />
          
        </p>
        <p className="text-sm flex items-center ">Copyright<BsAt/>2024</p>
      </div>
    </footer>
  )
}

export default Footer