import { NavLink } from 'react-router-dom'
function MenuItem({icon,text,path}) {
  return (
    <li className={`hover:bg-blue-900  rounded-lg cursor-pointer`}>
    <NavLink
     to={path} className={( {isActive, isPending} ) => 
                      isActive ? 
                      `bg-blue-900 flex items-center gap-1 rounded-lg  px-2 py-1`
                      : isPending
                      ? `flex  items-center gap-1 px-2 py-1`
                      :`flex items-center gap-1 px-2 py-1`
    }>
      {icon}{text}
      </NavLink>
    </li>
  )
}

export default MenuItem