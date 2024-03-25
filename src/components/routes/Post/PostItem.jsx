import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function PostItem({id,colSpan,image,title,text,tags}) {
  return (
    <div className={`w-full max-h-fit space-y-3 px-2 py-4 flex flex-col items-center text-black col-span-${colSpan} max-sm:col-span-12`}>
       <div className="w-full h-max">
        <img className="rounded-md w-full h-max" src={image} />
       </div> 
        <div className="flex gap-2">
          {tags?.map((tag,index)=>{
            return (<a key={index} className="border border-blue-900 px-2 py-1 rounded-md cursor-pointer">{tag}</a>)    
          })}
        
        </div>
        <a className="text-xl font-bold" href="#">{title}</a>
        <p>{text}</p>
          <div className="flex justify-start w-full">
          <Link to={`/posts/${id}`}>
          <p className="flex justify-between items-center  text-indigo-600 font-bold border rounded-lg px-4 py-2 cursor-pointer hover:bg-gradient-to-r hover:from-slate-300 hover:to-indigo-400">Read Article <BsArrowRight className=" ml-2"/></p>
          </Link>
        

        </div>
        
    </div>
  )
}

export default PostItem