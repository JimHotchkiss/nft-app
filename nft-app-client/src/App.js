import './App.css';
// import { useEffect, useState } from "react"
import { Navbar } from './components/Navbar'
// import { Nfts } from './components/Nfts';


const API_URL = "http://localhost:3000/api/v1/nfts"

// function getNfts() {
//   console.log('fetch')
// return fetch(API_URL)
//   .then(response => response.json())
// }

function App() {

//   const [nfts, setNfts] = useState([]);
//   const [loaded, setLoaded] = useState(false)

//  useEffect(() => {
//    getNfts().then(response => {
//      setLoaded(true)
//      setNfts(response)
//    })
//  }, [])
  
  return (
    <div>
      App
     {/* {nfts &&  <Nfts nfts = {nfts}loaded = {loaded}/> } */}
    </div>
  );
}

export default App;
