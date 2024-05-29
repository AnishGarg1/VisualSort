import { useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { initialize, setSorting } from './redux/slices/arraySlice';
import Bubbles from './components/SortingUtils/Bubbles';

function App() {
  const dispatch = useDispatch();
  const { sorting } = useSelector((state) => state.array)

  useEffect(() => {
    dispatch(initialize());
  }, [])

  const handleClickRandom = () => {
    dispatch(initialize());
  }

  const handleClickSort = () => {
    dispatch(setSorting(true));
    // console.log("Sorting", sorting);
  }

  return (
    <div className="App bg-teal-400 bg-opacity-80 h-screen w-screen flex flex-col justify-center items-center">
      <h1 className='text-amber-700 font-bold text-xl'>VisualSort App</h1>
      <div className='flex flex-col w-10/12 border-2 h-[90%] justify-between items-center'>
        
        <Navbar/>

        <div className='flex flex-col gap-2 justify-center items-center'>
          <Dashboard/>

          <div className='flex gap-1'>
            <button 
              onClick={() => handleClickRandom()}
              className='border-2 p-1 rounded-md bg-orange-300 hover:scale-110 transition-all duration-800'
            >
              Random
            </button>
            <button 
              onClick={() => handleClickSort()}
              className='border-2 p-1 rounded-md bg-orange-300'
            >
              Sort
            </button>
          </div>
        </div>

      </div>

      {/* Sorting Utils */}
      <div>
        <Bubbles/>
      </div>
    </div>
  );
}

export default App;
