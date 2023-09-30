import React from 'react'
import { THUMBNAIL_URL } from '../Utils/constants'

const MovieCard = ({imageID}) => {
   
  return (
    
            <img className='w-40 m-4 rounded-md h-max' alt="Thumbnail" src={THUMBNAIL_URL+imageID}></img>
      
   
  )
}

export default MovieCard