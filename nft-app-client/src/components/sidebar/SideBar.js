import React from 'react';
import SideBarBtn from './SideBarBtn';
import { DiAtom, DiDatabase, DiRor } from "react-icons/di"



const SideBar = ({ onOpenStateToggle }) => {
  return (
  <div className='h-auto w-16 flex 
                  flex-col bg-primary shadow'>
      <SideBarBtn 
        onClick={onOpenStateToggle} 
        icon={<DiAtom size={40}/>}/>
      <SideBarBtn icon={<DiDatabase size={40}/>}/>
      <SideBarBtn icon={<DiRor size={40}/>}/>
  </div>
  );
}

export default SideBar 


