import React from 'react'
import Sidebar from './Sidebar'
import ButtonList from './ButtonList'

const Body = () => {
  return (
    <div className="flex flex-wrap">
      
      <Sidebar />
      <ButtonList />
    </div>
  )
}

export default Body