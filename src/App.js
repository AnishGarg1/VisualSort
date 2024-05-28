import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    let arr = []
    const initialize = () => {
      for(let i=0; i<5; i++){
        arr.push(i+1);
      }
      setArray(arr)
    }

    initialize();
  }, [])
  return (
    <div className="App bg-teal-900 bg-opacity-80 h-screen w-screen">
      <h1 className='text-black'>VisualSort App</h1>
      <Navbar/>
      <Dashboard array={array}/>
    </div>
  );
}

export default App;
