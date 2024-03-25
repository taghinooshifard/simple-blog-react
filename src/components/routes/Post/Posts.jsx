import {
  useLoaderData,
} from "react-router-dom";
import PostItem from './PostItem'
import SinglePost from "./SinglePost";

function Posts() {
  const textlistlength = 100;
  const topnews = useLoaderData()?.topnews
  const allnews = useLoaderData()?.allnews
  const newsitem = useLoaderData()?.newsitem  
  const renderPost = ()=>{
    if(topnews!=null)
    return topnews?.map((postitem)=>{
        return (<PostItem 
        id={postitem.id}
        colSpan={4}
        key={postitem.id}
        image={postitem.image}
        tags={postitem.tags}
        title={postitem.title}
        text={postitem.text.substring(0,textlistlength)+"..."}
        
        />);    
    });
  
    if(allnews!=null)
    return allnews?.map((postitem)=>{
      return (<PostItem 
        id={postitem.id}
        colSpan={4}
        key={postitem.id}
        image={postitem.image}
        tags={postitem.tags}
        title={postitem.title}
        text={postitem.text.substring(0,textlistlength)+"..."}
        
        />)    
    });
  
  if(newsitem !=null)
    return newsitem?.map((postitem)=>{
      return (<SinglePost 
        id={postitem.id}
        key={postitem.id}
        image={postitem.image}
        tags={postitem.tags}
        title={postitem.title}
        text={postitem.text}
        
        />)    
    })
  }
  return (
    <>
    <div className="grid grid-cols-12 gap-4 bg-slate-100 ">
          {  renderPost()  }
    </div>    
    </>
  )
}

export default Posts