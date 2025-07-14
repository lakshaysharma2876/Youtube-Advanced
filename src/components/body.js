import React from 'react'
import Sidebar from './Sidebar'
import ButtonList from './ButtonList'
import VideoCard from './VideoCard'
import { Outlet } from 'react-router'

const Body = () => {
  return (
    <div className="flex gap-x-4">
      
      <Sidebar />

      <div className="flex flex-col gap-12">
        <Outlet />
      </div>
    </div>
  )
}

export default Body