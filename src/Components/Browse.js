import React, { useEffect } from 'react'

import Header from './Header';
import { TMDB_OPTION } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/movieSlice';
import MainContainer from './MainContainer';
import useGetMovieList from '../Utils/Hooks/useGetMovieList';

const Browse = () => {

  useGetMovieList()

  return (
    <div>
    <Header/>
    <MainContainer/>
    </div>
  )
}

export default Browse
