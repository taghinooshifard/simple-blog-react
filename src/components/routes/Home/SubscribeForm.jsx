import { BsArrowDownCircle } from 'react-icons/bs'
import { Form } from 'react-router-dom'

function SubscribeForm() {
  return (
    <div id='subscribe' className="relative h-screen flex flex-col gap-5 justify-center items-center shadow-2xl shadow-blue-400">

    <a href='#top-news'><BsArrowDownCircle className="absolute right-10 top-5 text-3xl cursor-pointer hover:text-indigo-800"/></a>
    <p className="text-3xl max-sm:text-2xl font-bold">#Roocket React Blog Site</p>
    <p className="text-xl font-bold">React BootCamp 2#</p>
    <Form method="post" className="flex justify-center items-center">
        <input name="email" type='text' className="px-4 py-2 bg-slate-100 rounded-l-md border text-blue-950 focus:ring-0" placeholder='Enter your Email...' />
        <button type='submit' className="px-4 py-2  rounded-r-md border border-l-0 font-semibold hover:text-cyan-950 hover:bg-gradient-to-r hover:from-slate-300 hover:to-indigo-400">Subscribe</button>
    </Form>
    </div>
  )
}

export default SubscribeForm