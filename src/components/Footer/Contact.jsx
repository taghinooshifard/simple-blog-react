import ContactList from "./ContactList"


function Contact() {
  return (
    <div className="col-span-4 max-sm:col-span-12 max-sm:mb-4  flex flex-col items-center gap-3">
    <div className=" flex justify-center items-center gap-1">
     <p className="text-2xl">Contact </p>
    </div>
    <ContactList/>
   </div>
  )
}

export default Contact