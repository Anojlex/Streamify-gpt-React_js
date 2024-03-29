import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import useGetMovieTrailer from '../Utils/Hooks/useGetMovieTrailer'

const VideoContainer = (movieID) => {

  useGetMovieTrailer(movieID)

  const trailerVideo = useSelector((store) => store.movies?.movieTrailer)



  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"

        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0`}
        title="YouTube video player"

        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );

}
export default VideoContainer
