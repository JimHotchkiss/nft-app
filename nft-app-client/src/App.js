import './App.css';
import SideBar from './components/sidebar/SideBar';
import NftList from './components/NftList'
// Export default doesn't require {}
// Export const requires {}



function App() {
  
  return (
    <div className='flex flex-row'>
      <SideBar />
      <NftList />
    </div>
  );
}

export default App;
