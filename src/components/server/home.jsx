import {
  redirect
} from "react-router-dom";
const remoteApiUpdate = async (method,data)=>{
  try {
    
    let url = method=='PUT' || method == 'DELETE'?
    `https://65f55662f54db27bc022ec4a.mockapi.io/posts/${data.id}`:
    `https://65f55662f54db27bc022ec4a.mockapi.io/posts`;   
    const res = await fetch(url,
    {
      method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    });
    if(res.ok){
      return await res.json();
    }
  } catch (error) {
    console.log(error);
    // throw new Error(error)
  }
}
const remoteApiGetHandler = async ({id=null,sortBy='id',order='desc',page=1,limit=1})=>{
const url = id==null?new URL('https://65f55662f54db27bc022ec4a.mockapi.io/posts'):new URL(`https://65f55662f54db27bc022ec4a.mockapi.io/posts/${id}`);
url.searchParams.append('page', page);
url.searchParams.append('limit', limit);
url.searchParams.append('sortBy', sortBy);
url.searchParams.append('order', order);
// console.log(url);
try{
  let res = await fetch(url, {
    method: 'GET',
    headers: {'content-type':'application/json'},
  });
  if (res.ok) {
    
    return await res.json();
  }
}
catch(error) {
    console.log("remoteApiGetHandler: "+error);
}
}

export async function  getTopNews(){
  
  let topnews = await remoteApiGetHandler({limit:3});
  // console.log("getTopNews ",topnews);
  return {topnews:topnews.map((item)=>{
      item.tags = item.tags.split(",");
      return item;
  })};
}

export async function  getAllNews(){
  let allnews = await remoteApiGetHandler({limit:12});
  // console.log("getAllNews ",allnews);
  return {allnews:allnews.map((item)=>{
      item.tags = item.tags.split(",");
      return item;
  })};
    
}
export async function  getNewsById({ params }){
 
  // console.log("getNewsById params=",params?.postid);
    let newsitem = await remoteApiGetHandler({limit:1,id:params.postid});
    newsitem.tags = newsitem.tags.split(",");
    // console.log("getNewsById ",newsitem);
    return {newsitem:[newsitem]};
}

export async function subscribeEmail({ request, params }){
  const formData = await request.formData();
  // console.log("formData ",formData);
  const updates = Object.fromEntries(formData);
  console.log("updates ",updates);
  // console.log("params ",params);
  return params;
}
export async function editPost({ request, params }){
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  // console.log("updates in editPost ",updates);
  remoteApiUpdate('PUT',updates);
  return redirect(`/posts/${params.postid}`);
}
export async function redirectEditPost({params }){
  return redirect(`/posts/${params.postid}/edit`);
}