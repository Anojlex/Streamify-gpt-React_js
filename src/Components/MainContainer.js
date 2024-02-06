import React from 'react'
import VideoContainer from './VideoContainer'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const trailerVideo = useSelector((store) => store.movies?.nowPlayingMovies)

  if (!trailerVideo) {
    return
  }

  const { original_title, overview, id } = trailerVideo[4]

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoContainer movieID={id} />
    </div>
  )
}

export default MainContainer
