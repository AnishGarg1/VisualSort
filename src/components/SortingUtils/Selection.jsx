import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setArr, setSorting } from '../../redux/slices/arraySlice';

const Selection = () => {
    const dispatch = useDispatch();
    const { arr, size, sorting } = useSelector((state) => state.array);

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

    const selectionSort = async () => {
        let currArr = [...arr];
        
        for(let i=0; i<size-1; i++){
            let ele = i;
            for(let j=i; j<size; j++){
                if(currArr[ele] > currArr[j]){
                    ele = j;
                }
            }

            // Swap values
            let temp = currArr[i];
            currArr[i] = currArr[ele];
            currArr[ele] = temp;
            
            dispatch(setArr([...currArr]));
            await sleep(500);
        }

        dispatch(setArr([...currArr]));
        dispatch(setSorting(false));
    }

    useEffect(() => {
        if(sorting){
            selectionSort();
        }
    }, [sorting])

  return (
    <></>
  )
}

export default Selection