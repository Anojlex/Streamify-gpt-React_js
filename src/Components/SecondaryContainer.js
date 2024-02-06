import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies)
  const popularMovies = useSelector((store) => store.movies?.popularMovies)
  const topRated = useSelector((store) => store.movies?.topRated)

  return nowPlayingMovies, popularMovies, topRated && (
    <div className="bg-black">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">

        <MovieList movies={nowPlayingMovies} title={"Now Trending"} />

        <MovieList movies={popularMovies} title={"Popular Movies"} />

        <MovieList movies={topRated} title={"Top Rated"} />

        <MovieList movies={nowPlayingMovies} title={"Hindi"} />

        <MovieList movies={topRated} title={"Top 10 in India"} />


      </div>
    </div>
  )
}

export default SecondaryContainer