import React, { useState, useRef } from 'react'
import Header from './Header'
import formValidation from "../Utils/formValidation"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase"
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from "../Utils/userSlice"
import { USER_AVATAR } from '../Utils/constants';
import { BG_URL } from '../Utils/constants';


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [signinForm, setsigninForm] = useState("true")
  const [errorMessage, seterrorMessage] = useState(null)


  const mail = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const handleSignupClick = () => {
    setsigninForm(!signinForm)
  }

  const validateForm = () => {

    const message = formValidation(mail.current.value, password.current.value);

    if (message !== null) {
      seterrorMessage(message)
    }
    if (message === null) {
      seterrorMessage(null)
      if (!signinForm) {
        createUserWithEmailAndPassword(auth, mail.current.value, password.current.value)
          .then((userCredential) => {

            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: name.current.value, photoURL: USER_AVATAR
            }).then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

            }).catch((error) => {
              navigate("/error")
            });

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            seterrorMessage(errorMessage)
          });
      }

      if (signinForm) {
        signInWithEmailAndPassword(auth, mail.current.value, password.current.value)
          .then((userCredential) => {

            const user = userCredential.user;
            console.log(user);

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            seterrorMessage(errorMessage)
          });
      }

    }
  }

  return (
    <div  >
      <Header />

      <div className="absolute  bg-green-300">
        <img src={BG_URL} alt="bg" className="object-cover w-screen h-screen" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-90"></div>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black bg-opacity-70  mx-auto left-0 right-0 z-10 mt-28 flex-col w-[400px] p-16 h-[650px]">

        <h1 className='text-white mt-4 ml-2 text-[32px] font-bold'>{signinForm ? "Sign In" : "Sign Up"}</h1>

        {!signinForm &&
          <input ref={name} className='w-full bg-[#333333] m-2 mt-6 h-12 rounded-md px-8 text-white' type='text' placeholder='Enter your Name' />
        }


        <input ref={mail} className='w-full bg-[#333333] m-2 mt-4 h-12 rounded-md px-8 text-white' type='text' placeholder='Email Address' />

        <input ref={password} className='w-full bg-[#333333] m-2 mt-4 h-12 rounded-md px-8 text-white' type='Password' placeholder='Password' />

        {errorMessage
          && <div className='text-yellow-400 m-2 pl-2 '>{errorMessage}</div>
        }


        <button onClick={validateForm} className="bg-[#218a2c] w-full m-2 mt-4 h-12 text-white rounded-md">{signinForm ? "Sign In" : "Sign Up"}</button>

        <div ><span className='text-white text-opacity-60 m-2'>{signinForm ? "New to Netflix?" : "Already a User?"}</span> <span onClick={handleSignupClick} className='text-white cursor-pointer'>{signinForm ? "Sign Up Now" : "Sign In Now"}</span></div>

      </form>


    </div >

  )
}

export default Login