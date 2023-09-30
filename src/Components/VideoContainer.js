import React, { useEffect } from 'react'
import { TMDB_OPTION } from '../Utils/constants'
import { addMovieTrailer } from '../Utils/movieSlice'
import { useDispatch, useSelector } from 'react-redux'
import useGetMovieTrailer from '../Utils/Hooks/useGetMovieTrailer'

const VideoContainer = (movieID) => {

useGetMovieTrailer(movieID)

const trailerVideo=useSelector((store)=>store.movies?.movieTrailer)


  
return (
    <div className='text-white w-full aspect-video'>
      <iframe 
          width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen 
      ></iframe>
    </div>
  );
  
}
export default VideoContainer
