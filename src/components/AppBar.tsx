import React from 'react'
import SearchBar from './SearchBar';
import SideBar from './SideBar';

const AppBar = () => {
  return (
    <div className="flex justify-between">
      {/* <div>SplitPrice</div> */}
      <SideBar></SideBar>
      <div><SearchBar/></div>
      <div>LOGO</div>
    </div>
  )
}

export default AppBar;