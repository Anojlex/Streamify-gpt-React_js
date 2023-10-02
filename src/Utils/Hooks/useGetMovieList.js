import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { TMDB_OPTION } from '../constants'
import { addNowPlayingMovies } from '../movieSlice'
import { useEffect } from 'react'

const useGetMovieList = () => {

    const dispatch=useDispatch()

    const nowPlayingMoviesExist =useSelector(store=>store.movies.nowPlayingMovies)

    const getMovieList=async()=>{

       const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_OPTION)

       const json=await data.json()

       dispatch(addNowPlayingMovies(json.results))
    }

useEffect(()=>{
 !nowPlayingMoviesExist&& getMovieList()
},[] )

}

export default useGetMovieList