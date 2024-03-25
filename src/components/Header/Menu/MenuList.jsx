import { BsFillChatQuoteFill, BsFillHouseDoorFill, BsFillTrophyFill } from 'react-icons/bs'
import MenuItem from './MenuItem'

function MenuList({ismobile=false,iscol=false}) {
  return (
    <ul className={`flex ${iscol && `flex-col items-center`} max-sm:flex-col gap-10 font-bold  ${ismobile && `max-sm:hidden max-sm:invisible`}`}>
    <MenuItem icon={(<BsFillHouseDoorFill/>)} text={"Home"} path={"/"}/>
    <MenuItem icon={(<BsFillChatQuoteFill/>)} text={"Blog"} path={"/posts"}/>
    <MenuItem icon={(<BsFillTrophyFill/>)} text={"About"} path={"/about"}/>
    </ul>
  )
}

export default MenuList