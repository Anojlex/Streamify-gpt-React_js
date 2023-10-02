import React from 'react'
import { useEffect } from 'react'
import { addMovieTrailer } from '../movieSlice'
import { useDispatch, useSelector } from 'react-redux'
import { TMDB_OPTION } from '../constants'

const useGetMovieTrailer = ({movieID}) => {

   const dispatch=useDispatch()

    const trailerExist=useSelector(store=>store.movies.movieTrailer)

    const getMovieTrailer=async()=>{

    const data=await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos`, TMDB_OPTION )

     const json=await data.json()

     const filterData=json.results.filter((video)=>video.type==="Trailer");

     const trailer=filterData.length ? filterData[0] : json.results[0];
    

     dispatch(addMovieTrailer(trailer))

 }


useEffect(()=>{

 !trailerExist && getMovieTrailer()
},[])

}


export default useGetMovieTrailer