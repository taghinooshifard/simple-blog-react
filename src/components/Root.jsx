import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 text-slate-100">
    <Header/>
    <main><Outlet/></main>
    <Footer/>
    </div>
  )
}

export default Root