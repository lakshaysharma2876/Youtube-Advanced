import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router'
import { useDispatch } from 'react-redux';
import { closeSideMenu } from '../utils/sidebarSlice';

const VideoContent = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get('v'));

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(closeSideMenu());
    },[]);
    

  return (
    <div>
      <iframe className= "p-4" width="1100" height="600" src={"https://www.youtube.com/embed/" + searchParams.get('v')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoContent