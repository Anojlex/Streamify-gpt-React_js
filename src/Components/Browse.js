import React, { useEffect } from 'react'

import Header from './Header';
import { TMDB_OPTION } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/movieSlice';
import MainContainer from './MainContainer';
import useGetMovieList from '../Utils/Hooks/useGetMovieList';
import SecondaryContainer from './SecondaryContainer';
import useGetPopularMovies from '../Utils/Hooks/useGetPopularMovies';
import useGetTopRated from '../Utils/Hooks/useGetTopRated';

const Browse = () => {

  useGetMovieList()
  useGetPopularMovies()
  useGetTopRated()
  return (
    <div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  )
}

export default Browse
