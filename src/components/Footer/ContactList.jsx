import { BsBank, BsEnvelope, BsFillTelephonePlusFill } from 'react-icons/bs'
import ContactListItem from './ContactListItem'

function ContactList() {
  return (
    <>
    <ContactListItem icon={(<BsEnvelope className="w-4 h-4" />)} text={"nooshifard@gmail.com"}/>
    <ContactListItem icon={(<BsFillTelephonePlusFill className="w-4 h-4" />)} text={"+989903503018"}/>
    <ContactListItem icon={(<BsBank className="w-4 h-4" />)} text={"Tehran.Azadi Sq."}/>
    
    </>
  )
}

export default ContactList