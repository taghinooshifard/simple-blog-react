import React from 'react';
import Menu from './Menu/Menu';
function Header() {
  return (
    <header className="w-full h-24 max-sm:h-max  border-0  shadow-2xl shadow-blue-800">
         <div className="flex h-full w-full justify-between place-items-center px-5">
          <Menu/>
         </div>
    </header>
  )
}

export default Header