import { IoWallet } from 'react-icons/io5'
import './SidebarHeader.css'

import React from 'react'

const SidebarLogo = () => {
  return (
    <div className='sidebar-head'>
      <span className='sidebar-logo'>
        <IoWallet />
      </span>
      <h2 className='sidebar-title'>مدیریت هزینه ها</h2>
    </div>
  )
}

export default SidebarLogo