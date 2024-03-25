import {  RouterProvider} from "react-router-dom";
import main from "./components/MainRoute";




function App() {


  return (
    <>
      <RouterProvider router={main}/>
    </>
  )
}

export default App
