import React from 'react'


function About() {
  return (
    <>
    <div className="flex h-max justify-center bg-slate-100">

      <div>
      <div className="p-5 rounded-lg  w-full h-max text-black">
        <p className="text-3xl">Who we are?</p>
        <p className="text-xl">A React developer is a frontend developer that builds JavaScript-based websites and applications with the React library. React or React.js is an open-source JavaScript framework. That means it operates like a toolkit for JavaScript developers. The React toolkit comes with pre-existing templates that help developers build faster.</p>
      </div>
      <div className="p-5 w-full h-max col-span-6">

      <img className="rounded-md w-full h-max" src='https://blog.talent500.co/wp-content/uploads/2023/02/lautaro-andreani-xkBaqlcqeb4-unsplash-1500x500.jpg'/>
      </div>
      </div>
      
    </div>
    
    </>
  )
}

export default About