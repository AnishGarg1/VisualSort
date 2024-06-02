import { useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { initialize, setSorting } from './redux/slices/arraySlice';
import Bubbles from './components/SortingUtils/Bubbles';
import Selection from './components/SortingUtils/Selection';
import Insertion from './components/SortingUtils/Insertion';
import Merge from './components/SortingUtils/Merge';
import Quick from './components/SortingUtils/Quick';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialize());
  }, [])

  const handleClickRandom = () => {
    dispatch(initialize());
    dispatch(setSorting(false));
  }

  const handleClickSort = () => {
    dispatch(setSorting(true));
  }

  return (
    <div className="App bg-teal-400 bg-opacity-80 h-screen w-screen flex flex-col justify-center items-center">
      <h1 className='text-amber-700 font-bold text-xl'>VisualSort App</h1>
      <div className='flex flex-col w-10/12 h-[90%] justify-between items-center mt-1'>
        
        <Navbar/>

        <div className='flex flex-col gap-2 justify-center items-center w-full'>
          <div className='w-full flex justify-center items-center px-2'>
            <Dashboard/>
          </div>


          <div className='border w-full flex gap-10 justify-center items-center mt-2 py-1 bg-black bg-opacity-15 rounded-md'>
            <button 
              onClick={() => handleClickRandom()}
              className='border-2 py-1 px-2 rounded-md bg-orange-300 hover:scale-110 transition-all text-sm'
            >
              Random
            </button>
            <button 
              onClick={() => handleClickSort()}
              className='border-2 py-1 px-2 rounded-md bg-orange-300 hover:scale-110 transition-all text-sm'
            >
              Sort
            </button>
          </div>
        </div>

      </div>

      {/* Sorting Utils */}
      <div>
        <Bubbles/>
        <Selection/>
        <Insertion/>
        <Merge/>
        <Quick/>
      </div>
    </div>
  );
}

export default App;
