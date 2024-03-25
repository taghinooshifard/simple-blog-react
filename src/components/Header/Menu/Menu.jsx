import { useState } from 'react'
import { BsJustify, BsXLg } from 'react-icons/bs';

import MenuList from './MenuList';
import SiteLogo from './SiteLogo';

function Menu() {
  const [showMenu,setShowMenu] = useState(false);
  const burgerMenuHandler = ()=>{
    setShowMenu(!showMenu)
  }
  return (
    <>
    <div id='menu-lg' className="visible max-sm:invisible max-sm:hidden">
   <MenuList/>
    </div>
    <div id='menu-sm' className="hidden max-sm:block max-sm:visible " >
        {!showMenu ?
        (<BsJustify className="w-12 h-12 cursor-pointer" onClick={burgerMenuHandler} />)
            :
        (<BsXLg   className="w-12 h-12 cursor-pointer" onClick={burgerMenuHandler} />)
        }
        {showMenu && 
          (<MenuList ismobile={!showMenu}/>)
        }
    </div>  
    
    {!showMenu &&
    (
      <SiteLogo/>      
    )
    }
    </>
    
    
   )
}

export default Menu