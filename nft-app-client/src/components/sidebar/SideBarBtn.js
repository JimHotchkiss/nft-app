import React from 'react';



const SideBarBtn = ({ icon, onClick}) => {


  return (
  <div>
    <button 
      onClick={onClick} 
      className="sidebar-icon">
        {icon}
    </button>
  </div>);
};

export default SideBarBtn;
