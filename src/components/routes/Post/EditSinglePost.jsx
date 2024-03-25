import {  BsFillXCircleFill, BsServer } from 'react-icons/bs';
import {
  useLoaderData,
  redirect,
  Form,
  Link
} from 'react-router-dom'

function EditSinglePost() {
  const newsitem = useLoaderData()?.newsitem 
    
  return (
    <div className="grid grid-cols-12 gap-4 bg-slate-100 ">
    <div className="w-10/12  space-y-3  py-20 flex flex-col justify-center items-center mx-auto text-black col-span-12">
      <Form method="post" className="flex flex-col w-5/12 text-black">
      <input type='hidden' defaultValue={newsitem[0].id} name='id'/>
        <label htmlFor='title' >Title:
          <input className="px-3 py-2 rounded-md w-full ml-2"  type='text' defaultValue={newsitem[0].title} name='title'/>
        </label>
        <label htmlFor='image'>Image:
          <input type='text' defaultValue={newsitem[0].image} name='image'
          className="px-3 py-2 rounded-md w-full ml-2"
          />
        </label>
        <label htmlFor='tags'>Tags:
          <input type='text' defaultValue={newsitem[0].tags} name='tags'
          className="px-3 py-2 rounded-md w-full ml-2"/>
        </label>
        <label htmlFor='text'>Text:
          <textarea  defaultValue={newsitem[0].text} name='text'
          className="px-3 py-2 rounded-md w-full ml-2"/>
        </label>
        
        
        <div className="col-span-12 flex justify-center items-center  gap-3 mt-5 ">
        <button className="flex justify-center items-center gap-1 px-4 py-2  rounded-md border border-indigo-600  font-semibold hover:text-cyan-950 hover:bg-gradient-to-r hover:from-slate-300 hover:to-indigo-400" type="submit">
        <BsServer />Save
        </button>
        <Link to={`/posts/${newsitem[0].id}`}
          className="flex justify-center items-center  gap-1 px-4 py-2  rounded-md border border-indigo-600 font-semibold hover:text-cyan-950 hover:bg-gradient-to-r hover:from-slate-300 hover:to-indigo-400"
          
        >
          <BsFillXCircleFill />
          Cancel
        </Link>
        </div>
      </Form>
    </div>
    </div>
  )
}

export default EditSinglePost