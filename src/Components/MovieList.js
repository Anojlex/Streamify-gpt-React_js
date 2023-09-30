import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies,title}) => {
    
  return (
   
 <div className='pl-12'>

<h1 className="p-4 text-xl font-bold">{title}</h1>

<div className='flex '>

  <div className="flex overflow-x-scroll ">

  {movies.map((movie)=>(<MovieCard key={movie.id} imageID={movie.poster_path}/>))}

  </div>
  </div>
</div>   
        
   
  )
}

export default MovieList