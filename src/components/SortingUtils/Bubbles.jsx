import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setArr, setSorting } from '../../redux/slices/arraySlice';

const Bubbles = () => {
    const dispatch = useDispatch();
    const { arr, size, sorting } = useSelector((state) => state.array);

    let currArr = [...arr];

    const bubbleSort = () => {
        console.log("before sort", currArr);
        
        for(let i=0; i<size-1; i++){
            for(let j=0; j<size-1-i; j++){
                if(currArr[j]>currArr[j+1]){
                    let temp = currArr[j];
                    currArr[j] = currArr[j+1];
                    currArr[j+1] = temp;
                }
            }
        }

        dispatch(setSorting(false));

        console.log("after sort", currArr)
        
        dispatch(setArr(currArr));
    }

    useEffect(() => {
        bubbleSort();
    }, [sorting])

  return (
    <div></div>
  )
}

export default Bubbles