import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const[signinForm,setsigninForm]=useState("true")

   const handleSignupClick=()=>{
    setsigninForm(!signinForm)
   }
    return (
        <div  >
            <Header />

            <div className="absolute">
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                   alt="" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-80"></div>
            </div>

            <form className="absolute bg-black bg-opacity-70  mx-auto left-0 right-0 z-10 mt-28 flex-col w-[450px] p-16 h-[650px]">

                <h1 className='text-white mt-4 ml-2 text-[32px] font-bold'>{signinForm?"Sign In":"Sign Up"}</h1>

                {!signinForm&& 
                <input className='w-full bg-[#333333] m-2 mt-6 h-14 rounded-md px-8 text-white' type='text' placeholder='Enter your Name' />
                } 
                
                
                <input className='w-full bg-[#333333] m-2 mt-4 h-14 rounded-md px-8 text-white' type='text' placeholder='Email Address' />

                <input className='w-full bg-[#333333] m-2 mt-4 h-14 rounded-md px-8 text-white' type='Password' placeholder='Password' />

                <button className="bg-[#e50914] w-full m-2 mt-4 h-14 text-white rounded-md">{signinForm?"Sign In":"Sign Up"}</button>

                <div ><span className='text-white text-opacity-60 m-2'>{signinForm?"New to Netflix?":"Already a User?"}</span> <span onClick={handleSignupClick} className='text-white cursor-pointer'>{signinForm?"Sign Up Now":"Sign In Now"}</span></div>
           
            </form>


        </div>

    )
}

export default Login