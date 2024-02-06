import React from 'react'
import { THUMBNAIL_URL } from '../Utils/constants'

const MovieCard = ({ imageID }) => {

  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt=" Thumbnail" src={THUMBNAIL_URL + imageID}></img>
    </div >

  )
}

export default MovieCard