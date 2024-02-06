import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase"
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../Utils/userSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NETFLIXLOGO, USER_AVATAR } from '../Utils/constants';
import { toggleGptSearchView } from '../Utils/gptSlice';
import { changeLanguage } from '../Utils/configSlice';
import { SUPPORTED_LANGUAGES } from '../Utils/constants';



const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const navigate = useNavigate()
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignout = () => {

    signOut(auth).then(() => {


    }).catch((error) => {
      navigate("/error");
    });
  }
  const unsubscribe = useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    })
    return () => unsubscribe
  }, [])



  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">

      <h1 className='font-extrabold text-green-500 shadow-sm mt-5 text-4xl'>STREAMIFY</h1>


      {user && <div className='flex'>
        {showGptSearch && (
          <select
            className=" mx-4 px-2 h-10 w-32 mt-5 rounded-lg bg-gray-700 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          className="  mx-4  h-10 w-28 mt-5 text-sm bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {showGptSearch ? "Homepage" : "GPT Search"}
        </button>
        <img className='w-8 h-8 my-6 rounded-md hidden md:block' src={USER_AVATAR}></img>
        <button onClick={handleSignout} className='bg-transparent text-white font-semibold px-3 w-18 h-8  m-4 rounded-md'>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header