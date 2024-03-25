import ReactLogo from '../../../assets/react.svg';
function SiteLogo() {
  return (
    <div id='logo' className="cursor-pointer ">
         <img src={ReactLogo} className="w-12 h-12 hover:w-14 hover:h-14 mr-4" alt="React Logo" />
    </div>
  )
}

export default SiteLogo