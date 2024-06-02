import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Slider, Typography } from '@mui/material';
import { initialize, setAlgo, setSize } from '../redux/slices/arraySlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { size } = useSelector((state) => state.array);

  const handleChangeSlider = (e) => {
    dispatch(setSize(e.target.value));
    dispatch(initialize());
  }

  const handleChangeAlgo = (e) => {
    dispatch(setAlgo(e.target.value));
  }

  return (
    <div className='w-full border rounded-md py-3 flex justify-center items-center bg-black bg-opacity-15'>
        <div className='w-11/12 flex justify-evenly items-center'>
          <div className='flex w-[40%] gap-2 justify-center items-center'>
            <div id="arraySize" className='w-full text-sm flex justify-center items-center gap-2'>
                <span className='font-bold'>Array Size:</span> <span className='border-2 rounded-md bg-white text-sm px-1'>{size}</span>
            </div>
            <Slider
              size='small'
              value={size}
              defaultValue={size}
              aria-label='Small'
              min={1}
              max={100}
              valueLabelDisplay='auto'
              onChange={(e) => handleChangeSlider(e)}
            />
          </div>
          <div className='flex gap-2 w-[40%] text-sm justify-center items-center'>
            <label htmlFor='algorithm' className='font-bold'>Algorithm:</label>
            <select id='algorithm' onChange={(e) => handleChangeAlgo(e)}>
              <option value="Bubble">Bubble Sort</option>
              <option value="Selection">Selection Sort</option>
              <option value="Insertion">Insertion Sort</option>
              <option value="Merge">Merge Sort</option>
              <option value="Quick">Quick Sort</option>
            </select>
          </div>
        </div>
    </div>
  )
}

export default Navbar