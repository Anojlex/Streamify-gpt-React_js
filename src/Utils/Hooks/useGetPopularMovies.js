
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { TMDB_OPTION } from '../constants'
import {  addPopularMovies } from '../movieSlice'
import { useEffect } from 'react'


const useGetPopularMovies = () => {

    const dispatch=useDispatch()

    const popularMoviesExist=useSelector(store=>store.movies.popularMovies)

    const getpopularMovies=async()=>{

       const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', TMDB_OPTION)

       const json=await data.json()

          console.log("popular",json);

       dispatch(addPopularMovies(json.results))
    }

useEffect(()=>{
    !popularMoviesExist && getpopularMovies()
},[] )

}

export default useGetPopularMovies