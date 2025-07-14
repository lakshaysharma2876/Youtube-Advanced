import React from 'react'
import { useParams } from 'react-router'

const VideoContent = () => {

    const {url} = useParams();


  return (
    <div>
      videos
    </div>
  )
}

export default VideoContent