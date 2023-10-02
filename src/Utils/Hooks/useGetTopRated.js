
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { TMDB_OPTION } from '../constants'
import {  addTopRated } from '../movieSlice'
import { useEffect } from 'react'

const useGetTopRated = () => {

    const dispatch=useDispatch()

    const topRatedExist =useSelector(store=>store.movies.topRated)

    const getTopRated=async()=>{

       const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', TMDB_OPTION)

       const json=await data.json()

          console.log("popular",json);

       dispatch(addTopRated(json.results))
    }

useEffect(()=>{
   !topRatedExist && getTopRated();
},[] )

}

export default useGetTopRated