import React from 'react'

const VideoTitle = ({ title, overview }) => {

  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden lg:inline-block py-6 text-md w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-1 md:py-2 px-2 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden lg:inline-block mx-2  bg-gray-500 text-white p-4 px-8 py-2 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle