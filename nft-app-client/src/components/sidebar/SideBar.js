import React from 'react';
import SideBarIcon from './SideBarIcon';
import { DiAtom, DiDatabase, DiRor } from "react-icons/di"



const SideBar = () => {


  return (
  <div className='h-screen w-16 flex 
                  flex-col bg-primary shadow justify-center'>
      <SideBarIcon icon={<DiAtom size={40}/>}/>
      <SideBarIcon icon={<DiDatabase size={40}/>}/>
      <SideBarIcon icon={<DiRor size={40}/>}/>
  </div>
  );
}

export default SideBar 


