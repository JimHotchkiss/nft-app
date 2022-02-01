import React from 'react';


const SideBarIcon = ({ icon }) => {

    const handleClick = () => {
        alert('sup')
    }
  return (
  <div>
    <i onClick={() => {
        handleClick()
    }} className="sidebar-icon">
        {icon}
    </i>
  </div>);
};

export default SideBarIcon;
