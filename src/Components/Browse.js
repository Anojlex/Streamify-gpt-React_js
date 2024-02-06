import React, { useEffect } from 'react'

import Header from './Header';
import MainContainer from './MainContainer';
import useGetMovieList from '../Utils/Hooks/useGetMovieList';
import SecondaryContainer from './SecondaryContainer';
import useGetPopularMovies from '../Utils/Hooks/useGetPopularMovies';
import useGetTopRated from '../Utils/Hooks/useGetTopRated';
import GptSearch from "./GptSearch";
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useGetMovieList()
  useGetPopularMovies()
  useGetTopRated()
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  )
}

export default Browse
