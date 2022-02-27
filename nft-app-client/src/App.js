import './App.css';
import SideBar from './components/sidebar/SideBar';
import Cards from './components/Cards'
import { useState, useEffect } from 'react'
// Export default doesn't require {}
// Export const requires {}
// `https://api.opensea.io/api/v1/collection/${slug}`


function App() {

  const [open, setOpen] = useState(false)
  const [nfts, setNfts] = useState([])

  const openStateToggle = () => {
    setOpen(!open)
    console.log(open)
  }

  const showSingle = (slug) => {
    fetch(`https://api.opensea.io/api/v1/assets`)
      .then(response => response.json())
      .then(data => console.log(data.assets))
  }

  useEffect(() => {
    fetch('https://api.opensea.io/api/v1/assets')
      .then(response => response.json())
      .then(data => setNfts(data.assets))
  }, [])
  
  return (
    <div className='flex flex-row bg-discord_gray'> 
      <SideBar 
        onOpenStateToggle={openStateToggle}/>
      <Cards 
        nfts={nfts}
        onShowSingle={showSingle}
        display={open}/> 

    </div>
  );
}

export default App;
