import { Form } from 'react-router-dom'
import { BsFeather } from "react-icons/bs";
function SinglePost({id,image,title,text,tags}) {
  
  return (
    <div className="relative w-10/12 max-h-fit space-y-3  py-20 flex flex-col items-center text-black col-span-12">
            <Form className="absolute top-0" method="post">
              <button className="flex py-2 px-4 rounded-b-xl bg-sky-500" type="submit">
                <BsFeather />Edit Post
                </button>
            </Form>
       <div className="w-full h-max flex flex-col">
       <a className="text-3xl font-bold mx-5" href="#">{title}</a>

        <img className="rounded-md w-min h-min my-8 mx-5" src={image} />
       </div> 
        <div className="flex justify-start gap-2 w-full ml-10">
          {tags?.map((tag,index)=>{
            return (<a key={index} href='#' className="border border-blue-900 px-2 py-1 rounded-md cursor-pointer text-base">{tag}</a>)    
          })}
        
        </div>
        <div className="w-full break-words mx-5">
        <p className="mt-8 mx-5 font-semibold 	">{text}</p>
        </div>
        
        
    </div>
  )
}

export default SinglePost