import { Link } from 'react-router-dom';
import Posts from '../Post/Posts'
import { BsArrowRight,  BsChatQuote} from "react-icons/bs";

function TopNews() {
  return (
    <div id='top-news' className="bg-slate-50 h-max flex flex-col">
    <div className="flex justify-between items-center px-10 max-sm:px-1 pt-10">
        <p className="flex justify-between items-center text-indigo-600 font-bold  text-3xl max-sm:text-base">New Posts <BsChatQuote className="text-2xl ml-2 max-sm:text-md max-sm:ml-1"/></p>
        <Link to="/posts"><p className="flex justify-between items-center  text-indigo-600 font-bold border rounded-lg px-4 py-2 cursor-pointer hover:bg-gradient-to-r hover:from-slate-300 hover:to-indigo-400 max-sm:text-base">View All Posts <BsArrowRight className="text-2xl ml-2 max-sm:text-md"/></p></Link>
    </div>
    <Posts/>
    </div>
  )
}

export default TopNews