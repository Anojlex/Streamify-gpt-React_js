import React from 'react'
import { THUMBNAIL_URL } from '../Utils/constants'

const MovieCard = ({imageID}) => {
   
  return (
    
            <img className='w-40 m-2 rounded-sm h-max' alt="Thumbnail" src={THUMBNAIL_URL+imageID}></img>
      
   
  )
}

export default MovieCard