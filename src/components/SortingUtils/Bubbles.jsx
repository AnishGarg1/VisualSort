import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setArr, setSorting } from '../../redux/slices/arraySlice';

const Bubbles = () => {
    const dispatch = useDispatch();
    const { arr, size, sorting } = useSelector((state) => state.array);

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    const bubbleSort = async () => {
        let currArr = [...arr];
        // console.log("before sort", currArr);
        
        for(let i=0; i<size-1; i++){
            for(let j=0; j<size-1-i; j++){
                if(currArr[j]>currArr[j+1]){

                    // Swap values
                    let temp = currArr[j];
                    currArr[j] = currArr[j+1];
                    currArr[j+1] = temp;

                    dispatch(setArr([...currArr]));
                    await sleep(500); // wait for 300ms for next step
                }
            }
        }

        // console.log("after sort", currArr)
        
        dispatch(setArr(currArr));
        dispatch(setSorting(false));
    }

    useEffect(() => {
        if(sorting){
            bubbleSort();
        }
    }, [sorting])

  return (
    <></>
  )
}

export default Bubbles