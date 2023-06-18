import React from 'react'
import './menubar.css';

const Menubar = () => {
  return (
    <div className='main_header'>
       <div className="header-left">
             <div className="header_logo">
                logo
             </div>
             <div className="header_left_menu">
               menu bar
             </div>
       </div>
       <div className="header-right">
             main menu bar  
       </div>
    </div>
  )
}

export default Menubar