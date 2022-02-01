import React from 'react';



const SideBarIcon = ({ icon }) => {

    const handleClick = (name) => {
        alert(name)
    }
  return (
  <div>
    <i onClick={() => {
        handleClick('Jimmy')
    }} className="sidebar-icon">
        {icon}
    </i>
  </div>);
};

export default SideBarIcon;
