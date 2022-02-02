import './App.css';
import SideBar from './components/sidebar/SideBar';
import Cards from './components/Cards'
import { useState, useEffect } from 'react'
// Export default doesn't require {}
// Export const requires {}



function App() {

  const [open, setOpen] = useState(false)
  const [nfts, setNfts] = useState([])

  const openStateToggle = () => {
    setOpen(!open)
    console.log(open)
  }

  useEffect(() => {
    fetch('https://api.opensea.io/api/v1/assets')
      .then(response => response.json())
      .then(data => setNfts(data.assets))
  }, [])
  
  return (
    <div className='flex flex-row'>
      <SideBar 
        onOpenStateToggle={openStateToggle}/>
      <Cards 
        nfts={nfts}
        display={open}/> 

    </div>
  );
}

export default App;
