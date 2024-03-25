import React from 'react'
import {useRouteError} from 'react-router-dom'
function errorpage() {
  const error = useRouteError();
  return (
    <div id='subscribe' className="relative h-screen flex flex-col gap-5 justify-center items-center shadow-2xl shadow-blue-400">

    
    <p className="text-2xl max-sm:text-2xl font-bold">Oops!</p>
    <p className="text-xl font-bold">Sorry, an unexpected error has occurred.</p>
    <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default errorpage