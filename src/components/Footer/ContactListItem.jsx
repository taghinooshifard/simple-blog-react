import React from 'react'

function ContactListItem({icon,text}) {
  return (
    <p className="flex items-center text-sm gap-1">
        {icon}{text}</p>

  )
}

export default ContactListItem