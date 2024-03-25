import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import Home from "./routes/Home/Home";
import Posts from "./routes/Post/Posts";
import About from "./routes/About";
import ErrorPage from "./routes/ErrorPage";
import { editPost, getAllNews, getNewsById, getTopNews, redirectEditPost, subscribeEmail } from "./server/home";
import EditSinglePost from "./routes/Post/EditSinglePost";

const MainRoute = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          index:true,
          element:<Home/>,
          loader:getTopNews,
          action:subscribeEmail,  
          errorElement:<ErrorPage/>,        
        },
        {
          path:"posts",
          element:<Posts/>,
          loader:getAllNews, 
          errorElement:<ErrorPage/>,        
        },
        {
          path:"posts/:postid",
          element:<Posts/>,
          loader:getNewsById, 
          action:redirectEditPost,
          errorElement:<ErrorPage/>,
        },
        {
          path:"posts/:postid/edit",
          element:<EditSinglePost/>,
          loader:getNewsById, 
          action:editPost,
          errorElement:<ErrorPage/>,        
        }
        ,
        {
          path:"about",
          element:<About/>
        }
      ]
    },
  ]);

export default MainRoute