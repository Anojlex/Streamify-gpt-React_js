import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { auth} from "../Utils/firebase"
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser ,removeUser} from '../Utils/userSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NETFLIXLOGO, USER_AVATAR } from '../Utils/constants';


const Header = () => {
  const dispatch=useDispatch()
  const user=useSelector(store=>store.user)
  const navigate=useNavigate()
  const handleSignout=()=>{

    signOut(auth).then(() => {
    

    }).catch((error) => {
      
    });
    }
   const unsubscribe= useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(user){
          const{uid,email,displayName,photoURL}=user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse")
        }else{
          dispatch(removeUser());
          navigate("/")
        }
      })
      return ()=>unsubscribe
     },[])
  return (
     <div className="absolute bg-gradient-to-b from-black w-full z-20 flex justify-between ">
    
      <div className='pl-10'>
      <img className=" w-32 m-6 " src={NETFLIXLOGO}/>
       

      </div>
    

    {user && <div className='flex'>
     <img className='w-8 h-8 my-6 rounded-md' src={USER_AVATAR}></img>
     <button onClick={handleSignout} className='bg-transparent text-white font-semibold px-3 w-18 h-8  m-4 rounded-md'>Sign Out</button>
     </div>}
    </div>
  )
}

export default Header